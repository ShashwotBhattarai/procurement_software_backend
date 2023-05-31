
import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { addItemsDto } from 'src/database/dtos/addItems.dto';
import { ItemsService } from '../admin_services/items.service';
import { updateItemsDto } from 'src/database/dtos/updateItems.dto';


@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) { }
    @Post()
    create(@Body() addItemsDto: addItemsDto) {
        return this.itemService.create(addItemsDto);
    }

    @Put(":id")
    update(@Body() updateItemsDto: updateItemsDto,@Param('id') id:number) {
        return this.itemService.updateItem(id, updateItemsDto);
    }

    @Get()
    findAll() {
        return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        const numberId: number = parseInt(id, 10);
        return this.itemService.findOne(numberId);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.itemService.delete(id);
    }

} 
