import { greet } from './greet';

describe('Greet', () => {
  it('should greet correctly', () => {
    expect(greet()).toBe('Hello from threads!');
  });
});
