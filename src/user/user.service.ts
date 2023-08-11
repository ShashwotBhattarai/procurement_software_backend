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
  ) {}

  async createMany(requirementDtos: RequirementDto[]): Promise<Object> {
    let isSaved: any;

    isSaved = await this.requirementRepository.save(requirementDtos);
    if (isSaved) {
      return {
        status: '200 ok',
        message: 'saved to database',
      };
    }
  }

  async updateItem(
    id: string,
    updateData: RequirementDto,
  ): Promise<Requirement> {
    const requirement = await this.requirementRepository.findOne({
      where: { id },
    });
    if (!requirement) {
      throw new Error('Requirement not found');
    }
    Object.assign(requirement, updateData);
    return this.requirementRepository.save(requirement);
  }

  async findAll(): Promise<Requirement[]> {
    return this.requirementRepository.find({
      relations: ['item_id', 'site_id'],
    });
  }

  async findOne(id: string): Promise<Requirement> {
    const requirement = await this.requirementRepository.findOne({
      where: {
        id,
      },
      relations: ['item_id', 'site_id'],
    });
    if (!requirement) {
      throw new NotFoundException(`requirement with ID ${id} not found`);
    }
    return requirement;
  }

  async delete(id: string): Promise<string> {
    const result = await this.requirementRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Requirement with ID ${id} not found`);
    } else {
      return `Requirement with ID ${id} has been deleted`;
    }
  }
}
