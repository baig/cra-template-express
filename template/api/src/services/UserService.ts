import { User } from 'db/models/User';
import { ErrorException } from 'utils/error-exception';
import { hash, compare } from 'bcrypt';
import { UserWithoutPassword } from 'types/manual';
import { errorMessages } from 'constants/error-messages';

export class UserService {
  static async createUser({ username, email, password }: CreateUserDto) {
    try {
      const userFound = await User.findOne({
        where: [{ email }, { username }],
      });
      if (userFound) {
        throw new ErrorException(errorMessages.USER_EXIST);
      }

      const hashedPassword = await hash(password, 10);
      const user = User.create({
        email,
        username,
        password: hashedPassword,
      });
      const userData = await user.save();
      delete userData.password;

      return userData as UserWithoutPassword;
    } catch (error) {
      throw new ErrorException(error);
    }
  }

  static async comparePassword(password: string, hashedPassword: string) {
    const samePassword = await compare(password, hashedPassword);
    if (!samePassword) {
      throw new ErrorException(errorMessages.USER_PASSWORD_NOT_MATCH);
    }
  }

  static async checkUserByUsernameOrEmail({
    usernameOrEmail,
    password,
  }: CheckUserByUsernameOrEmailDto) {
    try {
      const field = usernameOrEmail.includes('@') ? 'email' : 'username';

      const userFound = await User.findOne({
        where: { [field]: usernameOrEmail },
      });
      if (!userFound) {
        throw new ErrorException(errorMessages.USER_NOT_EXIST);
      }
      await this.comparePassword(password, userFound.password);
      delete userFound.password;

      return userFound as UserWithoutPassword;
    } catch (error) {
      throw new ErrorException(error);
    }
  }

  static async getUserById(id: string) {
    try {
      const user = await User.findOne({ where: { id } });
      if (!user) {
        throw new ErrorException(errorMessages.USER_NOT_EXIST);
      }
      delete user.password;
      return user as UserWithoutPassword;
    } catch (error) {
      throw new ErrorException(error);
    }
  }
}
