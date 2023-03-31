import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'usercode' }); //altera palavra padrão 'username' para 'usercode' na autenticação
  }

  async validate(userCode: string, password: string): Promise<string | object> {
    const user = await this.authService.validateUser(userCode, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
