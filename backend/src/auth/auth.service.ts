import { Injectable } from '@nestjs/common';
import { users } from 'src/data/users';
import { loginAuthDto, registerAuthDto } from './dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  users = users;

  login(data: loginAuthDto) {
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

  register(data: registerAuthDto) {
    const { username, password, confirmPassword } = data;
    if (this.users.find((user) => user.username === username))
      return 'User already exists';
    const id = uuid();
    const newUser = {
      id,
      username,
      password,
    };
    this.users = [...this.users, newUser];
    return newUser;
  }
}
