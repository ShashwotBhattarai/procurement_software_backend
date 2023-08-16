import { Module } from '@nestjs/common';
import { ItemsController } from './admin_controllers/items.controllers';
import { ItemsService } from './admin_services/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from 'src/entities/items.entity';
import { Site } from 'src/entities/site.entity';
import { SitesController } from './admin_controllers/sites.controllers.';
import { SiteService } from './admin_services/site.service';
import { SuppliersController } from './admin_controllers/suppliers.controller';
import { SupplierService } from './admin_services/suppliers.service';
import { Supplier } from 'src/entities/supplier.entity';
import { Inquiry } from 'src/entities/inquiry.entity';
import { InquiryController } from './admin_controllers/inquiry.controller';
import { InquiryService } from './admin_services/inquiry.service';
import { UsersService } from './admin_services/users.service';
import { UsersController } from './admin_controllers/users.controller';
import { Credentials } from 'src/entities/credentials.entity';
import { LoginModule } from 'src/login/login.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Items, Site, Supplier, Inquiry, Credentials]),
    LoginModule,
    ConfigModule,
  ],
  controllers: [
    ItemsController,
    SitesController,
    SuppliersController,
    InquiryController,
    UsersController,
  ],
  providers: [
    ItemsService,
    SiteService,
    SupplierService,
    InquiryService,
    UsersService,
  ],
})
export class AdminModule {}
