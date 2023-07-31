import { Body, Controller, Get, Post, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { RequirementService } from './user.service';
import { RequirementDto } from 'src/dtos/Requirement.dto';
import { UserAuthGuard } from 'src/auth/UserAuth.guard';

@UseGuards(UserAuthGuard)
@Controller('requirement')
export class RequirementController {
  constructor(private readonly requirementService: RequirementService) { }

  @Post()
create(@Body() requirementDtos: RequirementDto | RequirementDto[]) {
  if (Array.isArray(requirementDtos)) {
    // Handle the array of objects
    return this.requirementService.createMany(requirementDtos);
  } else {
    // Handle a single object
    return this.requirementService.create(requirementDtos);
  }
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
