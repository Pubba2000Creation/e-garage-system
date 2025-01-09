import { Module } from '@nestjs/common';
import { ServiceCentersService } from './service-centers.service';
import { ServiceCentersController } from './service-centers.controller';

@Module({
  controllers: [ServiceCentersController],
  providers: [ServiceCentersService],
})
export class ServiceCentersModule {}
