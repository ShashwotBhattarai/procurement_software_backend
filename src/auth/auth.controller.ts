import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Headers,
  Get,
} from '@nestjs/common';
import { UserAuthService } from './userAuth.service';
import { AuthDto } from 'src/dtos/auth.dto';
import { adminCredentials } from 'src/credentials';
import { AdminAuthService } from './adminAuth.service';


@Controller('auth')
export class AuthController {
  constructor(
    private userAuthService: UserAuthService,
    private adminAuthService: AdminAuthService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('login')
  signIn(@Headers() headers  ) {
    console.log(headers);
    const authHeader=headers['authorization'];
    const encodedCredentials = authHeader.split(' ')[1]; // Extract the encoded credentials from the "Basic" scheme
    const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
    const [username, password] = decodedCredentials.split(':');

    // Now you have access to the extracted username and password
    console.log('Username:', username);
    console.log('Password:', password);

    const signInDto: AuthDto = new AuthDto();
    signInDto.username = username;
    signInDto.password = password;
    
    const currentUser = signInDto.username;
    if (currentUser === adminCredentials.username) {
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
