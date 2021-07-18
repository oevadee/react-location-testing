import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '@prisma/client';

import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getOne({ username });

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: User): Promise<{
    token: string;
    userId: number;
  }> {
    const payload = {
      username: user.username,
      sub: user.id,
    };
    return {
      token: this.jwtService.sign(payload),
      userId: user.id,
    };
  }

  async refresh(user: User): Promise<{
    token: string;
    userId: number;
  }> {
    const payload = {
      username: user.username,
      sub: user.id,
    };
    return {
      token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN + 's',
      }),
      userId: user.id,
    };
  }

  async register(createUserDto: CreateUserDto): Promise<{
    token: string;
    userId: number;
  }> {
    const user = await this.usersService.create(createUserDto);
    return this.login(user);
  }
}
