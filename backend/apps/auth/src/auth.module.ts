import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '@app/common/database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    DatabaseModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // Dynamically load the JWT secret from .env
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRATION') }, // Load the expiration time
      }),
      inject: [ConfigService], // Inject ConfigService here
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
