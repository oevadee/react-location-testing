import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto, RegisterAuthDto } from './dto/index';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() body: LoginAuthDto) {
    return this.authService.login(body);
  }

  @Post()
  register(@Body() body: RegisterAuthDto) {
    return this.authService.register(body);
  }
}
