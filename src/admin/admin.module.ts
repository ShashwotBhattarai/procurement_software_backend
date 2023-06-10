import { Module } from '@nestjs/common';
import { ItemsController } from './admin_controllers/items.controllers';
import { ItemsService } from './admin_services/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from 'src/database/entity/items.entity';
import { Site } from 'src/database/entity/site.entity';
import { SiteController } from './admin_controllers/site.controllers.';
import { SiteService } from './admin_services/site.service';
import { SuppliersController } from './admin_controllers/suppliers.controller';
import { SupplierService } from './admin_services/suppliers.service';
import { Supplier } from 'src/database/entity/supplier.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Items,Site,Supplier])],
    controllers: [ItemsController,SiteController,SuppliersController],
    providers: [ItemsService,SiteService,SupplierService],
})
export class AdminModule { }
