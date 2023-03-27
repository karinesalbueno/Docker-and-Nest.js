import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { jwtConstants } from './constants';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(userCode: string, pass: string): Promise<object | null | string> {
    const user = await this.usersService.FindUser(userCode, pass);
    if (user && user.password === pass) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: { code: string; id: string; name: string }) {
    const payload = { userCode: user.code, userId: user.id, userName: user.name };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
        expiresIn: '2h',
      }),
    };
  }
}
