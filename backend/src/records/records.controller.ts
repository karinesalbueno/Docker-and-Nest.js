import { Controller, Param, Post, Get, Body, Put } from '@nestjs/common';
import { Records } from '@prisma/client';
import { CreateDto } from 'src/dtos/create.dto';
import { UpdateDto } from 'src/dtos/update.dto';
import { RecordsService } from './records.service';

@Controller('work')
export class RecordsController {
  constructor(private readonly records: RecordsService) {}

  @Get('/:userCode')
  findAll(@Param('userCode') userCode: string): Promise<Records[]> {
    return this.records.ListAll(userCode);
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return this.records.Register(createDto);
  }

  @Put()
  async update(@Body() updateDto: UpdateDto) {
    return this.records.updatedRecord(updateDto);
  }
}