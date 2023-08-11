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
import { CredentialsService } from './admin_services/credentials.service';
import { CredentialsController } from './admin_controllers/credentials.controller';
import { Credentials } from 'src/entities/credentials.entity';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Items, Site, Supplier, Inquiry, Credentials]),
    AuthModule,
    ConfigModule,
  ],
  controllers: [
    ItemsController,
    SiteController,
    SuppliersController,
    InquiryController,
    CredentialsController,
  ],
  providers: [
    ItemsService,
    SiteService,
    SupplierService,
    InquiryService,
    CredentialsService,
  ],
})
export class AdminModule {}
