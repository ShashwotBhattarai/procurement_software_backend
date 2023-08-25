import { Controller, HttpCode, HttpStatus, Headers, Get } from '@nestjs/common';
import { UserAuthService } from './userAuth.service';
import { AuthDto } from '../models/auth.dto';
import { AdminAuthService } from './adminAuth.service';

@Controller('auth')
export class LoginController {
  constructor(
    private userAuthService: UserAuthService,
    private adminAuthService: AdminAuthService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('login')
  signIn(@Headers() headers) {
    const authHeader = headers['authorization'];
    const encodedCredentials = authHeader.split(' ')[1];
    const decodedCredentials = Buffer.from(
      encodedCredentials,
      'base64',
    ).toString('utf-8');
    const [username, password] = decodedCredentials.split(':');

    const signInDto: AuthDto = new AuthDto();
    signInDto.username = username;
    signInDto.password = password;

    const currentUser = signInDto.username;
    if (currentUser === process.env.adminCredentials_username) {
      return this.adminAuthService.signIn(
        signInDto.username,
        signInDto.password,
      );
    } else {
      const token = this.userAuthService.signIn(
        signInDto.username,
        signInDto.password,
      );
      return token;
    }
  }
}
