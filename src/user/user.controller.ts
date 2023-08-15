import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RequirementService } from './user.service';
import { RequirementDto } from 'src/dtos/Requirement.dto';
import { UserAuthGuard } from 'src/auth/UserAuth.guard';

// @UseGuards(UserAuthGuard)
@Controller('requirement')
export class RequirementController {
  constructor(private readonly requirementService: RequirementService) {}

  @Post()
  create(@Body() requirementDtos: RequirementDto[]) {
    return this.requirementService.createMany(requirementDtos);
  }

  @Put(':id')
  update(@Body() requirementDto: RequirementDto, @Param('id') id: string) {
    return this.requirementService.updateItem(id, requirementDto);
  }

  @Get()
  findAll() {
    return this.requirementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requirementService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.requirementService.delete(id);
  }
}
