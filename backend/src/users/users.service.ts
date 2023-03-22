import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateDto } from './dtos/create.dto';
// import { DeleteDto } from './dtos/delete.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async ListAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async FindUnique(code: string): Promise<User[]> {
    return this.prisma.user.findMany({
      where: {
        code,
      },
    });
  }

  async Create(params: CreateDto): Promise<CreateDto> {
    const { name, email, password, code } = params;

    // Verificar se já existe uma pessoa com o mesmo código
    const findFirt = await this.prisma.user.findFirst({
      where: { code: code },
    });

    if (findFirt) {
      throw new Error('Código já utilizado!!');
    }

    const req = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
        code,
      },
    });

    return req;
  }

  // async Delete(params: DeleteDto): Promise<DeleteDto> {
  //   const { id, code } = params;

  //   // Verificar se já existe uma pessoa com o mesmo código
  //   const findFirt = await this.prisma.user.findFirst({
  //     where: { id: id, code: code },
  //   });

  //   if (!findFirt) {
  //     throw new Error('UsuÁrio não existeeeee!');
  //   }

  //   const req = await this.prisma.user.delete({
  //     where: {
  //       id: id,
  //       code: code,
  //     },
  //   });

  //   return req;
  // }
}
