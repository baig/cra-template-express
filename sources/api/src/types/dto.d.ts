type CreateUserDto = {
  username: string;
  email: string;
  password: string;
};

type CheckUserByUsernameOrEmailDto = {
  usernameOrEmail: string;
  password: string;
};
