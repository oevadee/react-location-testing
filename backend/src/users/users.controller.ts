import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../../dist/users/types';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  getOne(@Param('userId') userId: string): User {
    return this.usersService.getOne(userId);
  }

  @Get()
  getMany(): User[] {
    return this.usersService.getMany();
  }
}
