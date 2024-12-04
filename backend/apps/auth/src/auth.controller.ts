import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { AuthRegisterUserDto } from './dto/register.dto';



@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @ApiProperty({type:AuthRegisterUserDto})
  @ApiResponse({
    status: 201,
    description: 'The user registered successfully.',
  })
  async register(@Body() registerUserDto: AuthRegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

}
