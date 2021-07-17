import { HttpException, Injectable } from '@nestjs/common';
import { users } from 'src/data/users';
import { LoginAuthDto, RegisterAuthDto } from './dto';
import { v4 as uuid } from 'uuid';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/index';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  users = users;

  async login(data: LoginAuthDto): Promise<User | string> {
    const { username, password } = data;
    const users = await this.usersService.getMany();
    const user = users.find(
      (user) => user.username === username && user.password === password,
    );
    if (!user) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return user;
  }

  async register(data: CreateUserDto): Promise<User> {
    const user = await this.usersService.create(data);
    return user;
  }
}
