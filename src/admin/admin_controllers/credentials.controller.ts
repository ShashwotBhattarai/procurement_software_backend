import { Body, Controller, Get, Post, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { CredentialsDto } from 'src/dtos/credentials.dto';
import { CredentialsService } from '../admin_services/credentials.service';
import { AdminAuthGuard } from 'src/auth/adminAuth.guard';

@UseGuards(AdminAuthGuard)
@Controller('credentials')
export class CredentialsController {
  constructor(private readonly credentialsService: CredentialsService) { }
  @Post()
  create(@Body() credentialsDto: CredentialsDto) {
    return this.credentialsService.create(credentialsDto);
  }

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
