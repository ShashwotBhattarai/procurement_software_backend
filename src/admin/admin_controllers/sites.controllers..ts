import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SiteService } from '../admin_services/site.service';
import { SiteDto } from 'src/models/Site.dto';
import { AdminAuthGuard } from 'src/login/adminAuth.guard';

// @UseGuards(AdminAuthGuard)
@Controller('site')
export class SitesController {
  constructor(private readonly siteService: SiteService) {}
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() addSiteDto: SiteDto) {
    return this.siteService.create(addSiteDto);
  }
  @UsePipes(ValidationPipe)
  @Put(':id')
  update(@Body() siteDto: SiteDto, @Param('id') id: string) {
    return this.siteService.updateItem(id, siteDto);
  }

  @Get()
  findAll() {
    return this.siteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.siteService.delete(id);
  }
}
