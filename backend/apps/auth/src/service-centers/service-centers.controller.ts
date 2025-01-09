import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceCentersService } from './service-centers.service';
import { CreateServiceCenterDto } from './dto/create-service-center.dto';
import { UpdateServiceCenterDto } from './dto/update-service-center.dto';

@Controller('service-centers')
export class ServiceCentersController {
  constructor(private readonly serviceCentersService: ServiceCentersService) {}

  @Post()
  create(@Body() createServiceCenterDto: CreateServiceCenterDto) {
    return this.serviceCentersService.create(createServiceCenterDto);
  }

  @Get()
  findAll() {
    return this.serviceCentersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceCentersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceCenterDto: UpdateServiceCenterDto) {
    return this.serviceCentersService.update(+id, updateServiceCenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceCentersService.remove(+id);
  }
}
