import { NestFactory } from '@nestjs/core';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe());

  // Unified Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('E-Garage System API')
    .setDescription('Unified API documentation for E-Garage system')
    .setVersion('1.0')
    .addTag('garages')
    .addTag('auth')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000); // Unified app will run on port 3000
}
bootstrap();
