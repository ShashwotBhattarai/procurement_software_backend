import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemsDto } from 'src/database/dtos/Items.dto';
import { ItemsService } from '../admin_services/items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Post()
  create(@Body() itemsDto: ItemsDto) {
    return this.itemService.create(itemsDto);
  }

  @Put(':id')
  update(@Body() itemsDto: ItemsDto, @Param('id') id: string) {
    return this.itemService.updateItem(id, itemsDto);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //const numberId: number = parseInt(id, 10);
    return this.itemService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.itemService.delete(id);
  }
}
