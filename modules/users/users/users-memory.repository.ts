import type { Uncreated } from '@/shared/common';
import { generateId } from '@/shared/generate-id';
import { Injectable } from '@/shared/utils';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersMemoryRepository implements UsersRepository {
  private users: User[] = [];

  async createOne(user: Uncreated<User>) {
    const publicId = generateId();
    const toBeCreatedUser = { publicId, ...user };
    this.users.push(toBeCreatedUser);
    return toBeCreatedUser;
  }

  async findMany() {
    return this.users;
  }
}
