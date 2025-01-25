import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ServiceCategoryService } from './service-category.service';
import { CreateServiceCategoryDto } from './dto/create-service-category.dto';
import { UpdateServiceCategoryDto } from './dto/update-service-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from '@app/common';

@Controller('serviceCategory')
@ApiTags('service-category opration list')
export class ServiceCategoryController {
  constructor(private readonly serviceCategoryService: ServiceCategoryService) {}

  @Post()
  async create(@Body() createServiceCategoryDto: CreateServiceCategoryDto): Promise<CommonResponseDto> {
    try {
      const responseData = await this.serviceCategoryService.create(createServiceCategoryDto);

      return new CommonResponseDto(
        true,
        "Service category created successfully",
        responseData.document
      )
    } catch (error) {
      //handel unexpected error
      throw new HttpException(
        new CommonResponseDto(false, error.message, null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
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
