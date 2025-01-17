import { Module } from '@nestjs/common';
import { GarageApiModule } from './garage-api/src/garage-api.module';
import { AuthModule } from './auth/src/auth.module';


@Module({
  imports: [AuthModule, GarageApiModule],
})
export class AppModule {}
