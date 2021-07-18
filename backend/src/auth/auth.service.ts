import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/index';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getOne({ username });

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(data: User): Promise<{
    token: string;
    userId: number;
  }> {
    const { username, password, id } = data;
    const payload = {
      username,
      password,
      sub: id,
    };
    return {
      token: this.jwtService.sign(payload),
      userId: id,
    };
  }

  async register(data: CreateUserDto): Promise<User> {
    const user = await this.usersService.create(data);
    return user;
  }
}
