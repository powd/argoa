import { Uncreated } from '@/shared/common';
import { User } from './user.entity';

export abstract class UsersRepository {
  public abstract createOne(user: Uncreated<User>): Promise<User>;
  public abstract findMany(): Promise<User[]>;
}
