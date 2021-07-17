import { HttpException, Injectable } from '@nestjs/common';

import { User } from '@prisma/client';

import { PrismaService } from '../prisma.service';
import { CreateUserDto, GetUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getOne(findUserDto: GetUserDto) {
    const user: User = await this.prisma.user.findUnique({
      where: findUserDto,
    });

    if (!user) {
      const errors = { User: ' not found' };
      throw new HttpException({ errors }, 404);
    }

    return user;
  }

  async getMany() {
    return await this.prisma.user.findMany();
  }

  async create(data: CreateUserDto) {
    console.log(data);
    return await this.prisma.user.create({
      data: {
        username: data.username,
        password: data.password,
      },
    });
  }
}
