import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':username')
  async getOne(@Param('username') username: string): Promise<User> {
    return await this.usersService.getOne({ username });
  }

  @Get()
  async getMany(): Promise<User[]> {
    return await this.usersService.getMany();
  }
}
