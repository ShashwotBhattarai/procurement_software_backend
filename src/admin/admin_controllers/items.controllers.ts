import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  UseGuards,
  Injectable,
} from '@nestjs/common';
import { ItemsDto } from 'src/dtos/Items.dto';
import { ItemsService } from '../admin_services/items.service';
import { AdminAuthGuard} from 'src/auth/adminAuth.guard';


@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) { }
  @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() itemsDto: ItemsDto) {
    return this.itemService.create(itemsDto);
  }
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  update(@Body() itemsDto: ItemsDto, @Param('id') id: string) {
    return this.itemService.updateItem(id, itemsDto);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @UseGuards(AdminAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(id);
  }
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.itemService.delete(id);
  }
}
