import { Module } from '@nestjs/common';
import { ItemsController } from './admin_controllers/items.controllers';
import { ItemsService } from './admin_services/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from 'src/database/entity/items.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Items])],
    controllers: [ItemsController],
    providers: [ItemsService],
})
export class AdminModule { }
