import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requirement } from 'src/entities/requirements.entity';
import { RequirementService } from './user.service';
import { RequirementController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Credentials } from 'src/entities/credentials.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Requirement,Credentials]),AuthModule],
    controllers: [RequirementController],
    providers: [RequirementService],
})
export class UserModule { }
