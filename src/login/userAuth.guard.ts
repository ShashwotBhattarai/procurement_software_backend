import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { Credentials } from 'src/entities/credentials.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(
    public jwtService: JwtService,
    @InjectRepository(Credentials)
    private credentialsRepository: Repository<Credentials>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.jwtConstants_secret,
      });

      return this.checkRole(payload);
    } catch {
      throw new UnauthorizedException();
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private async checkRole(payload: any): Promise<boolean> {
    const payloadUsername = payload.username;
    const currentUser = await this.credentialsRepository.findOneBy({
      username: payloadUsername,
    });
    const guardRole = 'user';
    if (currentUser.role == guardRole) {
      return true;
    }
  }
}
