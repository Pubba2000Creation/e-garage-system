import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { CommonResponseDto } from '@app/common';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
