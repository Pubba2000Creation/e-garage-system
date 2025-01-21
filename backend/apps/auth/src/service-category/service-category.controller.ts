import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceCategoryService } from './service-category.service';
import { CreateServiceCategoryDto } from './dto/create-service-category.dto';
import { UpdateServiceCategoryDto } from './dto/update-service-category.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('service-category')
@ApiTags('service-category opration list')
export class ServiceCategoryController {
  constructor(private readonly serviceCategoryService: ServiceCategoryService) {}

  @Post()
  create(@Body() createServiceCategoryDto: CreateServiceCategoryDto) {
    return this.serviceCategoryService.create(createServiceCategoryDto);
  }

  @Get()
  findAll() {
    return this.serviceCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceCategoryDto: UpdateServiceCategoryDto) {
    return this.serviceCategoryService.update(+id, updateServiceCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceCategoryService.remove(+id);
  }
}
