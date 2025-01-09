import { Module } from '@nestjs/common';
import { VehicletypeService } from './vehicletype.service';
import { VehicletypeController } from './vehicletype.controller';

@Module({
  controllers: [VehicletypeController],
  providers: [VehicletypeService],
})
export class VehicletypeModule {}
