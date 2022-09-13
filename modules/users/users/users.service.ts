import type { Uncreated } from '@/shared/common';
import { Injectable } from '@/shared/utils';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createOne(user: Uncreated<User>) {
    return this.usersRepository.createOne(user);
  }

  findMany() {
    return this.usersRepository.findMany();
  }
}
