import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  UseGuards,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CredentialsDto } from 'src/models/credentials.dto';
import { UsersService } from '../admin_services/users.service';
import { AdminAuthGuard } from 'src/login/adminAuth.guard';

// @UseGuards(AdminAuthGuard)
@Controller('credentials')
export class UsersController {
  constructor(private readonly credentialsService: UsersService) {}
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() credentialsDto: CredentialsDto) {
    return this.credentialsService.create(credentialsDto);
  }
  @UsePipes(ValidationPipe)
  @Put(':id')
  update(@Body() credentialsDto: CredentialsDto, @Param('id') id: string) {
    return this.credentialsService.updateItem(id, credentialsDto);
  }

  @Get()
  findAll() {
    return this.credentialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.credentialsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.credentialsService.delete(id);
  }
}
