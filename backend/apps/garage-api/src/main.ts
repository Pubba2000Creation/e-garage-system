import { NestFactory } from '@nestjs/core';
import { GarageApiModule } from './garage-api.module';

async function bootstrap() {
  const app = await NestFactory.create(GarageApiModule);
  await app.listen(3002);
}
bootstrap();
