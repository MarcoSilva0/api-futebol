import { Injectable } from '@nestjs/common';
import { User } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dtos/login.dto';
import { NotFoundError } from 'rxjs';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(loginDto: LoginDto): Promise<User> {
    const user = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    const isMatch = await compare(loginDto.password, user?.password || '');

    if (!user || !isMatch) {
      throw new NotFoundError('Email or password invalid');
    }

    return user;
  }
}
