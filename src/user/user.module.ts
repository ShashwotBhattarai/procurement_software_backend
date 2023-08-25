import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requirement } from '../entities/requirements.entity';
import { RequirementService } from './user.service';
import { RequirementController } from './user.controller';
import { LoginModule } from '../login/login.module';
import { Credentials } from '../entities/credentials.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Requirement, Credentials]),
    LoginModule,
    ConfigModule,
  ],
  controllers: [RequirementController],
  providers: [RequirementService],
})
export class UserModule {}
