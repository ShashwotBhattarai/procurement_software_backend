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
import { ItemsDto } from 'src/dtos/Items.dto';
import { ItemsService } from '../admin_services/items.service';
import { AdminAuthGuard } from 'src/auth/adminAuth.guard';
// @UseGuards(AdminAuthGuard)
@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() itemsDto: ItemsDto) {
    return this.itemService.create(itemsDto);
  }
  @UsePipes(ValidationPipe)
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
    return this.itemService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.itemService.delete(id);
  }
}
