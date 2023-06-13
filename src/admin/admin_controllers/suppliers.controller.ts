import { Body, Controller, Get, Post, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { SupplierDto } from 'src/dtos/supplier.dto';
import { SupplierService } from '../admin_services/suppliers.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SupplierService) { }
  @Post()
  create(@Body() supplierDto: SupplierDto) {
    return this.suppliersService.create(supplierDto);
  }

  @Put(':id')
  update(@Body() supplierDto: SupplierDto, @Param('id') id: string) {
    return this.suppliersService.updateItem(id, supplierDto);
  }

  @Get()
  findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suppliersService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.suppliersService.delete(id);
  }
}
