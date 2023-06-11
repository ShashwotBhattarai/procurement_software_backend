import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Requirement } from 'src/entities/requirements.entity';
import { RequirementDto } from 'src/dtos/Requirement.dto';

@Injectable()
export class RequirementService {
    constructor(
        @InjectRepository(Requirement)
        public requirementRepository: Repository<Requirement>,
    ) { }

    async create(requirementDto: RequirementDto): Promise<Object> {
        const isSaved = await this.requirementRepository.save({
            site: requirementDto.site_id,
            item: requirementDto.item_id,
            ...requirementDto
        });

        if (isSaved) {
            return {
                status: "200 ok",
                message: "saved to database"
            };
        }

    }

    async updateItem(id: string, updateData: RequirementDto): Promise<Requirement> {
        const requirement = await this.requirementRepository.findOne({
            where: { id }
        });
        if (!requirement) {
            throw new Error('Requirement not found');
        }
        Object.assign(requirement, updateData);
        return this.requirementRepository.save(requirement);
    }

    async findAll(): Promise<Requirement[]> {
        return this.requirementRepository.find({ relations: ['item', 'site'] });
    }

    async findOne(id: string): Promise<Requirement> {
        const requirement = await this.requirementRepository.findOne({
            where: {
                id
            },
            relations: ['item', 'site']
        })
        if (!requirement) {
            throw new NotFoundException(`requirement with ID ${id} not found`);
        }
        return requirement;
    }

    async delete(id: string): Promise<string> {
        const result = await this.requirementRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Requirement with ID ${id} not found`);
        }
        else {
            return `Requirement with ID ${id} has been deleted`;
        }

    }
}

