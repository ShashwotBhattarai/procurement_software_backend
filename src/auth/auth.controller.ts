
import { Body, Controller, Post, HttpCode, HttpStatus} from '@nestjs/common';
import { UserAuthService } from './userAuth.service';
import { AuthDto } from 'src/dtos/auth.dto';
import { adminCredentials } from 'src/credentials';
import { AdminAuthService } from './adminAuth.service';


@Controller('auth')
export class AuthController {
  constructor(private userAuthService: UserAuthService, private adminAuthService:AdminAuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: AuthDto) {
    const currentUser= signInDto.username;
    if(currentUser===adminCredentials.username){
      return this.adminAuthService.signIn(signInDto.username, signInDto.password);
    }else{
      return this.userAuthService.signIn(signInDto.username, signInDto.password);
    }
    
  }
}
