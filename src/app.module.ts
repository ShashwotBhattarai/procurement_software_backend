import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './entities/items.entity';
import { Site } from './entities/site.entity';
import { Requirement } from './entities/requirements.entity';
import { UserModule } from './user/user.module';
import { Supplier } from './entities/supplier.entity';
import { Inquiry } from './entities/inquiry.entity';
import { LoginModule } from './login/login.module';
import { Credentials } from './entities/credentials.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AdminModule,
    UserModule,
    LoginModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.database_host,
      port: Number(String(process.env.database_port)),
      username: process.env.database_username,
      password: process.env.database_password,
      database: process.env.database_name,
      entities: [Items, Site, Requirement, Supplier, Inquiry, Credentials],
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
