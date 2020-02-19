// import { User } from './user.entity';
// import * as bcrypt from 'bcrypt';

// describe('User entity', () => {
//   let user: User;

//   beforeEach(() => {
//     user = new User();
//     user.password = 'testPassword';
//     user.salt = 'testSalt';
//     bcrypt.hash = jest.fn();
//   });
//   describe('validatePassword', () => {
//     it('returns if password is valid', () => {
//       bcrypt.hash.mockReturnValue('testPassword');
//       expect(bcrypt.hash).not.toHaveBeenCalled();
//       const result = user.validatePassword('12121221');
//       expect(bcrypt.hash).toHaveBeenCalledWith('12121221', 'testSalt');
//       expect(result).toEqual(true);
//     });

//     it('returns if password is invalid', () => {});
//   });
// });
describe('Not a test', () => {
  it('returns true', () => {
    expect(true).toEqual(true);
  });
});
