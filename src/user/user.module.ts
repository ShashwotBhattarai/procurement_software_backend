import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requirement } from 'src/entities/requirements.entity';
import { RequirementService } from './user.service';
import { RequirementController } from './user.controller';
import { LoginModule } from 'src/login/login.module';
import { Credentials } from 'src/entities/credentials.entity';
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
