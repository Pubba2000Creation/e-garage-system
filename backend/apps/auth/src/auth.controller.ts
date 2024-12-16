import { Body, ConflictException, Controller, Get, HttpException, HttpStatus, Logger, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiParam, ApiProperty, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthRegisterUserDto } from './dto/register.dto';
import { CommonResponseDto } from '@app/common';
import { authLoginDto } from './dto/login.dto';



@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  private readonly logger = new Logger(AuthService.name);

  /**
   * 
   * @param registerUserDto 
   * 
   * 
  
   * @returns CommonResponseDto ************************************************************************************
   */

  @Post('register')
  @ApiBody({ type: AuthRegisterUserDto }) // Defines request body for Swagger
  @ApiResponse({
    status: 201,
    description: 'User Crated and verify OTP',
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
      const responseData = await this.authService.register(registerUserDto); 
      return new CommonResponseDto(true, 'User created and verify OTP', responseData.document);
    } catch (error) {
      // Handle unexpected errors
      throw new HttpException(
        new CommonResponseDto(false, error.message,null ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

/**
 * Verify OTP code for the user.
 * 
 * @param {string} otp - The OTP code to verify.
 * 
 * @returns {CommonResponseDto} - A response indicating the result of the OTP verification******************************************.
 */
  @Post('verify-otp')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        otp: { type: 'number', description: 'The OTP code to verify', example: '123456' },
      },
      required: ['otp'],
    },
  })
  @ApiResponse({
    status: 200,
    description: 'OTP verified successfully, user account activated.',
    type: CommonResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'OTP not found or invalid.',
    type: CommonResponseDto,
  })
  @ApiResponse({
    status: 409,
    description: 'OTP has expired.',
    type: CommonResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
    type: CommonResponseDto,
  })
  async verifyOTP(@Body('otp') otp: number): Promise<CommonResponseDto> {
    try {
      // Check if the provided OTP is valid
      if (!otp) {
        throw new HttpException(
          new CommonResponseDto(false, 'OTP is required.', null),
          HttpStatus.BAD_REQUEST,
        );
      }
      // Call service to verify the OTP
      const responseData = await this.authService.verifyOTP(otp);
  
      // Return success response
      return new CommonResponseDto(
        true,
        'OTP verified successfully, user account activated.',
        responseData.document,
      );
    } catch (error) {
      // Handle unexpected errors
      throw new HttpException(
        new CommonResponseDto(false, error.message,null ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  
/**
 * Resend OTP code to the user.
 * 
 * @query {string} userEmail - The email address of the user to resend the OTP.
 * 
 * @returns {CommonResponseDto} - A response indicating whether the OTP was sent successfully.********************************************
 */
  @Post('resend-otp')
  @ApiQuery({ name: 'userEmail', type: String, required: true, description: 'The email address of the user' })
  @ApiResponse({
    status: 200,
    description: 'OTP sent successfully',
    type: CommonResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
    type: CommonResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
    type: CommonResponseDto,
  })
  async resendOTP(@Query('userEmail') userEmail: string): Promise<CommonResponseDto> {
    try {
      // Attempt to resend OTP
      console.log(userEmail);
      const responsedata = await this.authService.resendOTP(userEmail);
      
      // Log success event
      this.logger.log(`OTP resent successfully to ${userEmail}`);
      
      return new CommonResponseDto(true, 'OTP sent successfully', responsedata.document);
    } catch (error) {
        // Handle unexpected errors
        throw new HttpException(
          new CommonResponseDto(false, error.message,null ),
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      
    }
  }
  

  /**
   * API for user login
   * 
   * @param {AuthLoginUserDto} loginUserDto
   * 
   * @returns {CommonResponseDto}
   */

  async login(@Body() loginUserDto: authLoginDto): Promise<CommonResponseDto> {
    try {
      const responseData = await this.authService.login(loginUserDto);
      return new CommonResponseDto(true, 'User logged in successfully', responseData.document);
    } catch (error) {
      // Handle unexpected errors
      throw new HttpException(
        new CommonResponseDto(false, error.message,null ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }












}
