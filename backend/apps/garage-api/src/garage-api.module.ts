import { Module } from '@nestjs/common';
import { GarageApiController } from './garage-api.controller';
import { GarageApiService } from './garage-api.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [GarageApiController],
  providers: [GarageApiService],
})
export class GarageApiModule {}
