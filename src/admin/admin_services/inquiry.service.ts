import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inquiry } from 'src/database/entity/inquiry.entity';
import { InquiryDto } from 'src/database/dtos/inquiry.dto';

@Injectable()
export class InquiryService {
    constructor(
        @InjectRepository(Inquiry)
        public inquiryRepository: Repository<Inquiry>,
    ) { }

    async create(inquiryDto: InquiryDto): Promise<Object> {
        const isSaved = await this.inquiryRepository.save({
            requirement: inquiryDto.requirement_id,
            supplier: inquiryDto.supplier_id,
            ...inquiryDto
        });

        if (isSaved) {
            return {
                status: "200 ok",
                message: "saved to database"
            };
        }

    }

    async updateItem(id: string, updateData: InquiryDto): Promise<Inquiry> {
        const inquiry = await this.inquiryRepository.findOne({
            where: { id }
        });
        if (!inquiry) {
            throw new Error('Requirement not found');
        }
        Object.assign(inquiry, updateData);
        return this.inquiryRepository.save(inquiry);
    }

    async findAll(): Promise<Inquiry[]> {
        return this.inquiryRepository.find({relations:['requirement','supplier']});
    }

    async findOne(id: string): Promise<Inquiry> {
        const inquiry = await this.inquiryRepository.findOne({
            where: {
                id
            },
            relations: ['requirement','supplier']
        })
        if (!inquiry) {
            throw new NotFoundException(`inquiry with ID ${id} not found`);
        }
        return inquiry;
    }

    async delete(id: string): Promise<string> {
        const result = await this.inquiryRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Inquiry with ID ${id} not found`);
        }
        else {
            return `Inquiry with ID ${id} has been deleted`;
        }

    }
}

