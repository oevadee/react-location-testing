import { Injectable } from '@nestjs/common';
import { users } from 'src/data/users';
import { LoginAuthDto, RegisterAuthDto } from './dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  users = users;

  login(data: LoginAuthDto) {
    const { username, password } = data;
    console.log(this.users);
    console.log(username);
    console.log(password);
    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );
    if (!user) return 'Auth failed';
    return user;
  }

  register(data: RegisterAuthDto) {
    const { username, password } = data;
    if (this.users.find((user) => user.username === username))
      return 'User already exists';
    const id = uuid();
    const newUser = {
      id,
      username,
      password,
    };
    this.users.push(newUser);
    return this.users;
  }
}
