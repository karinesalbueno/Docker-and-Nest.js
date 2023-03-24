import { Controller, Param, Post, Get, Body, Delete } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';
import { CreateDto } from './dtos/create.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly user: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.user.ListAll();
  }

  @Get('/:code')
  async FindUnique(@Param('code') code: string): Promise<User[]> {
    return this.user.FindUnique(code);
  }

  @Post()
  async create(@Body() create: CreateDto) {
    return this.user.Create(create);
  }

  @Delete('/:id')
  async DeleteDto(@Param('id') id: string) {
    // valores passados em requisição HTTP são sempre codificados como strings
    const userId = parseInt(id);
    return this.user.Delete(userId);
  }
}
