import { generateShortId } from '@/shared/generate-id/generate-id';
import { Injectable } from '@/shared/utils';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersMemoryRepository implements UsersRepository {
  async createOne(user: User) {
    const publicId = generateShortId();
    return { publicId, ...user };
  }
}
