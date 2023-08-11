import { Injectable, NotFoundException } from '@nestjs/common';
import { CredentialsDto } from 'src/dtos/credentials.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Credentials } from 'src/entities/credentials.entity';

@Injectable()
export class CredentialsService {
  constructor(
    @InjectRepository(Credentials)
    public credentialsRepository: Repository<Credentials>,
  ) {}

  async create(credentialsDto: CredentialsDto): Promise<Credentials> {
    const credentials = this.credentialsRepository.create(credentialsDto);
    return this.credentialsRepository.save(credentials);
  }

  async updateItem(
    credentials_id: string,
    updateData: Partial<Credentials>,
  ): Promise<Credentials> {
    const credential = await this.credentialsRepository.findOneBy({
      id: credentials_id,
    });
    if (!credential) {
      throw new Error('Credentials not found');
    }
    Object.assign(credential, updateData);
    return this.credentialsRepository.save(credential);
  }

  async findAll(): Promise<Credentials[]> {
    return this.credentialsRepository.find();
  }

  async findOne(id: string): Promise<Credentials> {
    const credential = await this.credentialsRepository.findOne({
      where: { id },
    });
    if (!credential) {
      throw new NotFoundException(`Credential with ID ${id} not found`);
    }
    return credential;
  }

  async delete(id: number): Promise<string> {
    const result = await this.credentialsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Credentials with ID ${id} not found`);
    } else {
      return `Credentials with ID ${id} has been deleted`;
    }
  }
}
