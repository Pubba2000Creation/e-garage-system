import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '@app/common/database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    DatabaseModule,

  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
