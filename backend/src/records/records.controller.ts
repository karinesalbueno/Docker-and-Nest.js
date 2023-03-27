import { Controller, Param, Post, Get, Body, Put, UseGuards } from '@nestjs/common';
import { Records } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { RecordsService } from './records.service';
import { CreateDto } from './dtos/create.dto';
import { UpdateDto } from './dtos/update.dto';

@UseGuards(JwtAuthGuard)
@Controller('work')
export class RecordsController {
  constructor(private readonly records: RecordsService) {}

  @Get('/:userCode')
  findAll(@Param('userCode') userCode: string): Promise<Records[]> {
    return this.records.ListAll(userCode);
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return this.records.Create(createDto);
  }

  @Put()
  async update(@Body() updateDto: UpdateDto) {
    return this.records.updatedRecord(updateDto);
  }
}
