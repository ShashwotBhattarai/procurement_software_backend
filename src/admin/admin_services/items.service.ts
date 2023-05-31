
import { Injectable, NotFoundException } from '@nestjs/common';
import { addItemsDto } from 'src/database/dtos/addItems.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Items } from 'src/database/entity/items.entity';


@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Items)
        public itemsRepository: Repository<Items>,
    ) { }

    async create(createItemDto: addItemsDto): Promise<Items> {
        const item = this.itemsRepository.create(createItemDto);
        return this.itemsRepository.save(item);
    }

    async updateItem(item_id: number, updateData: Partial<Items>): Promise<Items> {
        const item = await this.itemsRepository.findOneBy({ item_id });
        if (!item) {
            throw new Error('Item not found');
        }
        Object.assign(item, updateData);
        return this.itemsRepository.save(item);
    }

    async findAll(): Promise<Items[]> {
        return this.itemsRepository.find();
    }

    async findOne(id: number): Promise<Items> {
        const item = await this.itemsRepository.createQueryBuilder('item')
            .where('item_id = :id', { id })
            .getOne();
        if (!item) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }
        return item;
    }

    async delete(id: number): Promise<string> {
        const result = await this.itemsRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }
        else {
            return `Item with ID ${id} has been deleted`;
        }

    }
}