import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { CommonResponseDto } from '@app/common';
import { response } from 'express';
import { RESPONSE_PASSTHROUGH_METADATA } from '@nestjs/common/constants';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
 /*
   * Endpoint for get all Branch details
   *
   * @returns CommonResponseDto containing all Branch details
   */
  @Get()
  @ApiResponse({
    status: 200,
    description: 'All users retrieved successfully',
    type: CommonResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error - Server failure',
  })
  async findAll() {
    try {
      const responseData = await this.userService.findAll();
      return new CommonResponseDto(
        true,
        'All Users retrieved successfully',
        responseData.documents,
      );
    } catch (error) {
      console.error('Error in UserController.findAll:', error);
      throw new HttpException(
        new CommonResponseDto(false, 'Error retrieving Users', null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  /**
   * Endpoint for geting one user base on the id details
   * returns CommonResponseDto with user details
   * 
   * @param id 
   * @returns 
   */

  @Get(':id')
    @ApiResponse({
    status: 200,
    description: 'All users retrieved successfully',
    type: CommonResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error - Server failure',
  })
  async findOne(@Param('id') id: string) {
    try {
      
      const responseData = await this.userService.findOne(id);

      return new CommonResponseDto(
        true,
        "The user getting success",
        responseData.document,
      );


    } catch (error) {
      throw new HttpException(
        new CommonResponseDto(false,"error getting user",null),
        HttpStatus.INTERNAL_SERVER_ERROR
      )
      
    }
  }

  /**
   * 
   * @param id 
   * @param updateUserDto 
   * @returns 
   */

  @Patch(':id')
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: 200,
    description: 'user details updated successfully',
    type: CommonResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - Invalid data',
  })
  @ApiResponse({
    status: 404,
    description: 'user not found',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error - Server failure',
  })
  async update(
    @Param('id') id: string, 
    @Body() updateUserDto: UpdateUserDto
  ) {
    try {
      const responseData = await this.userService.update(id, updateUserDto);

      return new CommonResponseDto(
        true,
        "User is update successfully",
        responseData.document
      )
      
    } catch (error) {
      console.error('Error in user controller.update:', error);
      throw new HttpException(
        new CommonResponseDto(false,"error updating user",null),
        HttpStatus.INTERNAL_SERVER_ERROR
      )
      
    }
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
