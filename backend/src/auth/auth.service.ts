import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { jwtConstants } from './constants';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(userCode: string, pass: string): Promise<object | string> {
    const user = await this.usersService.FindUser(userCode);

    const isMatch = await bcrypt.compare(pass, user.password);

    if (user && isMatch) {
      const { ...result } = user;
      return result;
    }
    return 'not user';
  }

  async login(user: { code: string; id: string; name: string }) {
    const payload = { userCode: user.code, userId: user.id, userName: user.name };

    if (payload.userId) {
      return {
        access_token: this.jwtService.sign(payload, {
          secret: jwtConstants.secret,
          expiresIn: '2h',
        }),
      };
    } else {
      throw new Error('400');
    }
  }
}
