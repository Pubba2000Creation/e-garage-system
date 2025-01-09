import { Injectable } from '@nestjs/common';
import { CreateServiceCenterDto } from './dto/create-service-center.dto';
import { UpdateServiceCenterDto } from './dto/update-service-center.dto';

@Injectable()
export class ServiceCentersService {
  create(createServiceCenterDto: CreateServiceCenterDto) {
    return 'This action adds a new serviceCenter';
  }

  findAll() {
    return `This action returns all serviceCenters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceCenter`;
  }

  update(id: number, updateServiceCenterDto: UpdateServiceCenterDto) {
    return `This action updates a #${id} serviceCenter`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceCenter`;
  }
}
