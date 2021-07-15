import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [];

  getOne() {
    return this.users;
  }
}
