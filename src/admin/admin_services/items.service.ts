
import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemsDto } from 'src/database/dtos/Items.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Items } from 'src/database/entity/items.entity';


@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Items)
        public itemsRepository: Repository<Items>,
    ) { }

    async create(itemDto: ItemsDto): Promise<Items> {
        const item = this.itemsRepository.create(itemDto);
        return this.itemsRepository.save(item);
    }

    async updateItem(item_id: string, updateData: Partial<Items>): Promise<Items> {
        const item = await this.itemsRepository.findOneBy({ id: item_id });
        if (!item) {
            throw new Error('Item not found');
        }
        Object.assign(item, updateData);
        return this.itemsRepository.save(item);
    }

    async findAll(): Promise<Items[]> {
        return this.itemsRepository.find();
    }

    async findOne(id: string): Promise<Items> {
        const item = await this.itemsRepository.findOne({where: {id}});
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