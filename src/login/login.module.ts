import { Module } from '@nestjs/common';
import { UserAuthService } from './userAuth.service';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credentials } from '../entities/credentials.entity';
import { UserAuthGuard } from './userAuth.guard';
import { AdminAuthService } from './adminAuth.service';
import { AdminAuthGuard } from './adminAuth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import 'dotenv/config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Credentials]),
    JwtModule.register({
      global: true,
      secret: process.env.jwtConstants_secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],

  providers: [
    UserAuthService,
    AdminAuthService,
    UserAuthGuard,
    AdminAuthGuard,
    ConfigService,
  ],
  controllers: [LoginController],
  exports: [UserAuthGuard, AdminAuthGuard],
})
export class LoginModule {}
