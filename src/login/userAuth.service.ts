import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Credentials } from 'src/entities/credentials.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserAuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Credentials)
    public credentialsRepository: Repository<Credentials>,
  ) {}

  async signIn(currentUsername: string, currentPass: string): Promise<any> {
    try {
      const legalUser = await this.credentialsRepository.findOneBy({
        username: currentUsername,
      });
      if (
        !(
          legalUser.username === currentUsername &&
          legalUser.password === currentPass
        )
      ) {
        throw new UnauthorizedException();
      } else {
        const payload = {
          sub: legalUser.id,
          username: legalUser.username,
          role: legalUser.role,
        };

        return {
          access_token: await this.jwtService.signAsync(payload),
          id: legalUser.id,
          fullName: legalUser.fullname,
          role: legalUser.role,
        };
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
