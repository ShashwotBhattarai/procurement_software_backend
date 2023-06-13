
import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from 'src/dtos/auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: AuthDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
