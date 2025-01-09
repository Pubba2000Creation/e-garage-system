import { Module } from '@nestjs/common';
import { GarageApiController } from './garage-api.controller';
import { GarageApiService } from './garage-api.service';
import { ReviewModule } from './review/review.module';
import { NewsModule } from './news/news.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [ReviewModule, NewsModule, NotificationModule],
  controllers: [GarageApiController],
  providers: [GarageApiService],
})
export class GarageApiModule {}
