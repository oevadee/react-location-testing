import { Body, Post } from "@nestjs/common";
import { LoginUserDto } from './dto/index';

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('api/login')
  login(@Body(), body: LoginUserDto) {
    console.log(body)
  }
}
