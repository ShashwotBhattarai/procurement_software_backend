import { Module } from '@nestjs/common';
import { ItemsController } from './admin_controllers/items.controllers';
import { ItemsService } from './admin_services/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from 'src/entities/items.entity';
import { Site } from 'src/entities/site.entity';
import { SiteController } from './admin_controllers/site.controllers.';
import { SiteService } from './admin_services/site.service';
import { SuppliersController } from './admin_controllers/suppliers.controller';
import { SupplierService } from './admin_services/suppliers.service';
import { Supplier } from 'src/entities/supplier.entity';
import { Inquiry } from 'src/entities/inquiry.entity';
import { InquiryController } from './admin_controllers/inquiry.controller';
import { InquiryService } from './admin_services/inquiry.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
    imports: [TypeOrmModule.forFeature([Items, Site, Supplier, Inquiry])],
    controllers: [ItemsController, SiteController, SuppliersController, InquiryController],
    providers: [ItemsService, SiteService, SupplierService, InquiryService,AuthGuard],
})
export class AdminModule { }
