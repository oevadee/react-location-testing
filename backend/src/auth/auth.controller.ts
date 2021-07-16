import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/index';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  login(@Body() body: AuthUserDto) {
    return this.authService.login(body);
  }
}
