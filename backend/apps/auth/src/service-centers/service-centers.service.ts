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

  findOne(_id: String) {
    return this.serviceCentersRepository.findOne({_id});
  }

  update(_id: string, updateServiceCenterDto: UpdateServiceCenterDto) {
   
    //add funtions for the service-center update
    return this.serviceCentersRepository.findOneAndUpdate(
      { _id: _id },
      {$set: updateServiceCenterDto},
    );
  }

  remove(id: string) {
    return this.serviceCentersRepository.findOneAndDelete({ _id: id });
  }
}
