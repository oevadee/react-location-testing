import { Body, Controller, Post } from '@nestjs/common';
import { User as UserPrisma } from '@prisma/client';

import { CreateUserDto } from 'src/users/dto';
import { AuthService } from './auth.service';
import { User } from './decorators/user.decorator';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@User() body: UserPrisma) {
    return this.authService.login(body);
  }

  @Post('register')
  async register(@Body() body: CreateUserDto) {
    return this.authService.register(body);
  }
}
