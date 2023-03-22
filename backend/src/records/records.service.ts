import { Injectable } from '@nestjs/common';
import { Records } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateDto } from './dtos/create.dto';
import { UpdateDto } from './dtos/update.dto';

@Injectable()
export class RecordsService {
  constructor(private readonly prisma: PrismaService) {}

  async ListAll(userCode: string): Promise<Records[]> {
    return this.prisma.records.findMany({
      where: {
        userCode,
      },
    });
  }

  async Create(params: CreateDto): Promise<void | string | CreateDto> {
    const { userCode } = params;

    //  ***** Verificar se já existe um ponto registrado para o funcionário na data atual
    const req = await this.prisma.records.create({
      data: {
        userCode: userCode,
        date: new Date(),
      },
    });
    return req;
  }

  async updatedRecord(params: UpdateDto): Promise<void | string | UpdateDto> {
    if (!params) {
      throw new Error('Params object is undefined or null');
    }

    const { userCode, date } = params;

    const req = await this.prisma.records.update({
      data: { userCode: userCode },
      where: {
        userCode_date: { userCode, date },
      },
    });

    return req;
  }
}
