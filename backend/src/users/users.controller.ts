import { Controller, Param, Post, Get, Body, Delete, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { AuthService } from 'src/auth/auth.service';
import { UsersService } from './users.service';
import { CreateDto } from './dtos/create.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly user: UsersService, private authService: AuthService) {}

  @Post('/register')
  async create(@Body() create: CreateDto) {
    return this.user.Create(create);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<User[]> {
    return this.user.ListAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:code')
  async FindUnique(@Param('code') code: string): Promise<User[]> {
    return this.user.FindUnique(code);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async DeleteDto(@Param('id') id: string) {
    // valores passados em requisição HTTP são sempre codificados como strings
    const userId = parseInt(id);
    return this.user.Delete(userId);
  }
}
