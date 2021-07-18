import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getOne(
    @Param('userId', new ParseIntPipe()) userId: number,
  ): Promise<User> {
    return await this.usersService.getOne({ id: userId });
  }

  @Get()
  async getMany(): Promise<User[]> {
    return await this.usersService.getMany();
  }
}
