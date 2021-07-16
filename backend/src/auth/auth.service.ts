import { Injectable } from '@nestjs/common';
import { users } from 'src/data/users';

@Injectable()
export class AuthService {
  users = users;

  login(data) {
    console.log(data);
  }
}
