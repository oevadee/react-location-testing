import { Controller, Post, UseGuards, Body, Request } from '@nestjs/common';

import { User as UserPrisma } from '@prisma/client';

import { LocalAuthGuard } from './guards/localStrategy.guard';
import { JwtAuthGuard } from './guards/jwt.guard';

import { AuthService } from './auth.service';
import { User } from './decorators/user.decorator';
import { CreateUserDto } from '../users/dto';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@User() user: UserPrisma) {
    return this.authService.login(user);
  }

  @Post('refresh')
  @UseGuards(JwtAuthGuard)
  async refresh(@Request() req) {
    return this.authService.refresh(req.user);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
}
