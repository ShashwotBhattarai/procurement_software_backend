
import { Injectable } from '@nestjs/common';
import { addItemsDto } from 'src/database/dtos/addItems.dto';
import { DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Items } from 'src/database/entity/items.entity';
import { updateItemsDto } from 'src/database/dtos/updateItems.dto';


@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Items)
        public itemsRepository: Repository<Items>,
    ) { }

    create(addItems_dto: addItemsDto) {
        return this.itemsRepository.save(addItems_dto);
    }

    async updateItem(item_id: number, updateData: Partial<Items>): Promise<Items> {
        const item = await this.itemsRepository.findOneBy({ item_id });
        if (!item) {
            throw new Error('Item not found');
        }

        // Update the item properties with the values from the updateData
        Object.assign(item, updateData);

        // Save the updated item to the database
        return this.itemsRepository.save(item);
    }

    findAll(): Promise<Items[]> {
        return this.itemsRepository.find();
    }
}

