import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminAuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(currentUsername: string, currentPass: string): Promise<any> {
    if (
      !(
        process.env.adminCredentials_username === currentUsername &&
        process.env.adminCredentials_password === currentPass
      )
    ) {
      throw new UnauthorizedException();
    } else {
      const payload = {
        username: process.env.adminCredentials_username,
      };
      console.log(process.env.jwtConstants_secret);

      return {
        access_token: await this.jwtService.signAsync(payload),
        fullName: process.env.adminCredentials_fullName,
        role: process.env.adminCredentials_role,
      };
    }
  }
}
