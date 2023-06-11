import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requirement } from 'src/entities/requirements.entity';
import { RequirementService } from './user.service';
import { RequirementController } from './user.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Requirement])],
    controllers: [RequirementController],
    providers: [RequirementService],
})
export class UserModule { }
