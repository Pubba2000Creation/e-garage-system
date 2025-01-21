import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicletypeService } from './vehicletype.service';
import { CreateVehicletypeDto } from './dto/create-vehicletype.dto';
import { UpdateVehicletypeDto } from './dto/update-vehicletype.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('vehicletype')
@ApiTags('vehicle-type opration list')
export class VehicletypeController {
  constructor(private readonly vehicletypeService:VehicletypeService) {}

  @Post()
  create(@Body() createVehicletypeDto: CreateVehicletypeDto) {
    return this.vehicletypeService.create(createVehicletypeDto);
  }

  @Get()
  findAll() {
    return this.vehicletypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicletypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicletypeDto: UpdateVehicletypeDto) {
    return this.vehicletypeService.update(+id, updateVehicletypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicletypeService.remove(+id);
  }
}
