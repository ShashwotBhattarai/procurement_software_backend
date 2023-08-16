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
import { InquiryService } from '../admin_services/inquiry.service';
import { InquiryDto } from 'src/models/inquiry.dto';
import { AdminAuthGuard } from 'src/login/adminAuth.guard';

@UseGuards(AdminAuthGuard)
@Controller('inquiry')
export class InquiryController {
  constructor(private readonly inquiryService: InquiryService) {}

  @Post()
  create(@Body() inquiryDto: InquiryDto) {
    return this.inquiryService.create(inquiryDto);
  }

  @Put(':id')
  update(@Body() inquiryDto: InquiryDto, @Param('id') id: string) {
    return this.inquiryService.updateItem(id, inquiryDto);
  }

  @Get()
  findAll() {
    return this.inquiryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inquiryService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.inquiryService.delete(id);
  }
}
