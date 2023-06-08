import { Module } from '@nestjs/common';
import { ItemsController } from './admin_controllers/items.controllers';
import { ItemsService } from './admin_services/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from 'src/database/entity/items.entity';
import { Site } from 'src/database/entity/site.entity';
import { SiteController } from './admin_controllers/site.controllers.';
import { SiteService } from './admin_services/site.service';


@Module({
    imports: [TypeOrmModule.forFeature([Items,Site])],
    controllers: [ItemsController,SiteController],
    providers: [ItemsService,SiteService],
})
export class AdminModule { }
