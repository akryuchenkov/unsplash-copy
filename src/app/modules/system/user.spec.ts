import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('2', '1', '1', '1', '1')).toBeTruthy();
  });
});
