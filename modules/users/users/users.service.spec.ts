import { User } from './user.entity';
import { UsersMemoryRepository } from './users-memory.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  it('should append publicId when creating', async () => {
    // Given
    const repository = new UsersMemoryRepository();
    const service = new UsersService(repository);
    const user: User = {
      email: 'some@user.test',
    };

    // When
    const createdUser = await service.createOne(user);

    // Then
    expect(createdUser).toEqual({ publicId: expect.any(String), ...user });
  });

  it('should find all the previously created users', async () => {
    // Given
    const repository = new UsersMemoryRepository();
    const service = new UsersService(repository);
    const userAmy: User = {
      email: 'amy@user.test',
    };
    const userBob: User = {
      email: 'bob@user.test',
    };

    // When
    const createdUserAmy = await service.createOne(userAmy);
    const createdUserBob = await service.createOne(userBob);

    // Then
    const createdUsers = [createdUserAmy, createdUserBob];
    const foundUsers = await service.findMany();
    expect(foundUsers).toEqual(createdUsers);
  });
});
