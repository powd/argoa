import { UsersService } from './users.service';

describe('Greet', () => {
  it('should greet correctly', () => {
    const service = new UsersService();

    expect(service.createOne()).toBe('test');
  });
});
