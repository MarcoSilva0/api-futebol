import { User } from 'src/user/interfaces/user.interface';

export class LoginPayload {
  id: number;
  permission: string;

  constructor(user: User) {
    this.permission = user.permission;
    this.id = user.id;
  }
}
