import { Injectable } from '@nestjs/common';
import { CreateServiceCenterDto } from './dto/create-service-center.dto';
import { UpdateServiceCenterDto } from './dto/update-service-center.dto';
import { serviceCenterRepository } from './service-centers.repository';

@Injectable()
export class ServiceCentersService {

  constructor (private readonly serviceCentersRepository: serviceCenterRepository) {}
  create(createServiceCenterDto: CreateServiceCenterDto) {
   return this.serviceCentersRepository.create(createServiceCenterDto);
  }

  findAll() {
    return this.serviceCentersRepository.find({});
  }

  findOne(id: String) {
    return this.serviceCentersRepository.findOne(id);
  }

  update(id: number, updateServiceCenterDto: UpdateServiceCenterDto) {
    return `This action updates a #${id} serviceCenter`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceCenter`;
  }
}
