import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dtos/login.dto';
import { NotFoundError } from 'rxjs';
import { compare } from 'bcrypt';
import { ResponseLogin } from './dtos/responseLogin.dto';
import { JwtService } from '@nestjs/jwt';
import { ResponseUserDto } from 'src/user/dtos/responseUser.dto';
import { LoginPayload } from './dtos/loginPayload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<ResponseLogin> {
    const user = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    const isMatch = await compare(loginDto.password, user?.password || '');

    if (!user || !isMatch) {
      throw new NotFoundError('Email or password invalid');
    }

    const payload = new LoginPayload(user);
    console.log(payload);
    return {
      accessToken: this.jwtService.sign({ payload }),
      user: new ResponseUserDto(user),
    };
  }
}
