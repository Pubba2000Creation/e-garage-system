import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { AuthRegisterUserDto } from './dto/register.dto';
import { CommonResponseDto } from '@app/common';



@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * 
   * @param registerUserDto 
   * 
   * 
  
   * @returns CommonResponseDto
   */
  @Post('register')
  @ApiBody({ type: AuthRegisterUserDto }) // Defines request body for Swagger
  @ApiResponse({
    status: 201,
    description: 'The user registered successfully.',
    type: CommonResponseDto,
  })
  @ApiResponse({
    status: 409,
    description: 'Conflict: User already exists.',
    type: CommonResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
    type: CommonResponseDto,
  })
  async register(
    @Body() registerUserDto: AuthRegisterUserDto,
  ): Promise<CommonResponseDto> {
    try {
      const responseData = await this.authService.register(registerUserDto); // Ensure to await the promise
      return new CommonResponseDto(true, 'Register successful', responseData);
    } catch (error) {
      if (error instanceof HttpException) {
        // Re-throw known HTTP exceptions
        throw error;
      }
      // Handle unexpected errors
      throw new HttpException(
        new CommonResponseDto(false, 'Internal server error', null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

}
