import { Injectable, UnauthorizedException } from '@nestjs/common';
import { adminCredentials } from 'src/credentials';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(username: string, pass: string): Promise<any> {
    if (
      !(
        adminCredentials.username === username &&
        adminCredentials.password === pass
      )
    ) {
      throw new UnauthorizedException();
    } else {
      const payload = {
        sub: adminCredentials.userId,
        username: adminCredentials.username,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  }
}
