import { User } from './user.entity';

export abstract class UsersRepository {
  public abstract createOne(user: User): Promise<User>;
}
