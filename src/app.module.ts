import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { database } from './credentials';
import { Items } from './entities/items.entity';
import { Site } from './entities/site.entity';
import { Requirement } from './entities/requirements.entity';
import { UserModule } from './user/user.module';
import { Supplier } from './entities/supplier.entity';
import { Inquiry } from './entities/inquiry.entity';
//import {dbConfig} from './database/dbconfig';

@Module({
  imports: [AdminModule, UserModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: database.username,
    password: database.password,
    database: database.name,
    entities: [Items, Site, Requirement, Supplier, Inquiry],
    synchronize: false,
  })],
  controllers: [],
  providers: [],
})
export class AppModule { }
