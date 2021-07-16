import { Injectable } from '@nestjs/common';
import { users } from 'src/data/users';

@Injectable()
export class UsersService {
  users = users;

  getOne(id: string) {
    return this.users.find((el) => el.id === id);
  }

  getMany() {
    return this.users;
  }
}
