import { Injectable } from '@/shared/utils';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createOne(user: User) {
    return this.usersRepository.createOne(user);
  }
}
