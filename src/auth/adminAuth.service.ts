import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { adminCredentials } from 'src/credentials';

@Injectable()
export class AdminAuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(currentUsername: string, currentPass: string): Promise<any> {
    
    if (
      !(
        adminCredentials.username === currentUsername &&
        adminCredentials.password === currentPass
      )
    ) {
      throw new UnauthorizedException();
    } else {
      const payload = {
        username: adminCredentials.username,
      };
      
      return {
        access_token: await this.jwtService.signAsync(payload),
        fullName:adminCredentials.fullName,
        role:adminCredentials.role
      };
    }
  }
}
