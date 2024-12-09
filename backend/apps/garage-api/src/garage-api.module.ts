import { Module } from '@nestjs/common';
import { GarageApiController } from './garage-api.controller';
import { GarageApiService } from './garage-api.service';


@Module({
  imports: [],
  controllers: [GarageApiController],
  providers: [GarageApiService],
})
export class GarageApiModule {}
