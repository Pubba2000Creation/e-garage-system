import { Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService,
} from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    // Load environment variables and validate them
    NestConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule globally available
      validationSchema: Joi.object({
        // Database configuration
        MONGODB_URI: Joi.string().required(),
        // Authentication
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().default('1h'),

        // Example: More variables can be added here as needed
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
      }),
      envFilePath: '.env', // Path to the environment file
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
