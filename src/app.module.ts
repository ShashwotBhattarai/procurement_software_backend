import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { database } from './credentials';
import { Items } from './database/entity/items.entity';
import { Site } from './database/entity/site.entity';
import { Requirement } from './database/entity/requirements.entity';
import { UserModule } from './user/user.module';


@Module({
  imports: [AdminModule,UserModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: database.username,
    password: database.password,
    database: database.name,
    entities: [Items, Site, Requirement],
    synchronize: false,
  })],
  controllers: [],
  providers: [],
})
export class AppModule { }
