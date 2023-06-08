import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { RequirementService } from './user.service';
import { RequirementDto } from 'src/database/dtos/Requirement.dto';

@Controller('requirement')
export class RequirementController {
  constructor(private readonly requirementService: RequirementService) {}

  @Post()
  create(@Body() requirementDto: RequirementDto) {
    return this.requirementService.create(requirementDto);
  }

  @Put(":id")
  update(@Body() requirementDto: RequirementDto, @Param('id') id: string) {
    return this.requirementService.updateItem(id, requirementDto);
  }

  @Get()
  findAll() {
    return this.requirementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requirementService.findOne(id)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.requirementService.delete(id);
  }
}
