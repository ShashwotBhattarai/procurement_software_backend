import { Injectable, NotFoundException } from '@nestjs/common';
import { SupplierDto } from 'src/dtos/supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from 'src/entities/supplier.entity';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    public supplierRepository: Repository<Supplier>,
  ) {}

  async create(supplierDto: SupplierDto): Promise<Supplier> {
    const supplier = this.supplierRepository.create(supplierDto);
    return this.supplierRepository.save(supplier);
  }

  async updateItem(
    supplier_id: string,
    updateData: Partial<Supplier>,
  ): Promise<Supplier> {
    const supplier = await this.supplierRepository.findOneBy({
      id: supplier_id,
    });
    if (!supplier) {
      throw new Error('Supplier not found');
    }
    Object.assign(supplier, updateData);
    return this.supplierRepository.save(supplier);
  }

  async findAll(): Promise<Supplier[]> {
    return this.supplierRepository.find();
  }

  async findOne(id: string): Promise<Supplier> {
    const supplier = await this.supplierRepository.findOne({ where: { id } });
    if (!supplier) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return supplier;
  }

  async delete(id: number): Promise<string> {
    const result = await this.supplierRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Supplier with ID ${id} not found`);
    } else {
      return `Supplier with ID ${id} has been deleted`;
    }
  }
}
