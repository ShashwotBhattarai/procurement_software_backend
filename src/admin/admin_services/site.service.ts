import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Site } from 'src/entities/site.entity';
import { SiteDto } from 'src/models/Site.dto';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site)
    public siteRepository: Repository<Site>,
  ) {}

  async create(siteDto: SiteDto): Promise<Site> {
    const site = this.siteRepository.create(siteDto);
    return this.siteRepository.save(site);
  }

  async updateItem(site_id: string, updateData: Partial<Site>): Promise<Site> {
    const site = await this.siteRepository.findOneBy({ id: site_id });
    if (!site) {
      throw new Error('Site not found');
    }
    Object.assign(site, updateData);
    return this.siteRepository.save(site);
  }

  async findAll(): Promise<Site[]> {
    return this.siteRepository.find();
  }

  async findOne(id: string): Promise<Site> {
    const site = await this.siteRepository.findOne({ where: { id } });
    if (!site) {
      throw new NotFoundException(`Site with ID ${id} not found`);
    }
    return site;
  }

  async delete(id: number): Promise<string> {
    const result = await this.siteRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Site with ID ${id} not found`);
    } else {
      return `Site with ID ${id} has been deleted`;
    }
  }
}
