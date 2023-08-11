import { Module } from '@nestjs/common';
import { UserAuthService } from './userAuth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from '../credentials';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credentials } from 'src/entities/credentials.entity';
import { UserAuthGuard } from './userAuth.guard';
import { AdminAuthService } from './adminAuth.service';
import { AdminAuthGuard } from './adminAuth.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Credentials]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],

  providers: [UserAuthService, AdminAuthService, UserAuthGuard, AdminAuthGuard],
  controllers: [AuthController],
  exports: [UserAuthGuard, AdminAuthGuard],
})
export class AuthModule {}
