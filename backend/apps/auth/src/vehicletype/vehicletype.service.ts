import { Injectable } from '@nestjs/common';
import { CreateVehicletypeDto } from './dto/create-vehicletype.dto';
import { UpdateVehicletypeDto } from './dto/update-vehicletype.dto';

@Injectable()
export class VehicletypeService {
  create(createVehicletypeDto: CreateVehicletypeDto) {
    return 'This action adds a new vehicletype';
  }

  findAll() {
    return `This action returns all vehicletype`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicletype`;
  }

  update(id: number, updateVehicletypeDto: UpdateVehicletypeDto) {
    return `This action updates a #${id} vehicletype`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicletype`;
  }
}
