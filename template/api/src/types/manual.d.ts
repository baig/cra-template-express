import { User } from 'db/models/User';

export type UserWithoutPassword = Omit<User, 'password'>;
