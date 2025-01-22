import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { VehicletypeService } from './vehicletype.service';
import { CreateVehicletypeDto } from './dto/create-vehicletype.dto';
import { UpdateVehicletypeDto } from './dto/update-vehicletype.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from '@app/common';
import { CreateServiceCenterDto } from '../service-centers/dto/create-service-center.dto';

@Controller('vehicletype')
@ApiTags('vehicle-type opration list')
export class VehicletypeController {
  constructor(private readonly vehicletypeService:VehicletypeService) {}
/*
  **
   * Endpoint to create new vehicle-type.
   *
   * This endpoint Create new vehicle-type. It retrieves database.
   * Returns a response containing new created vehicle-type.
   *
   * @returns {Promise<CommonResponseDto>} A response object containing a success flag, message, and datails of the vehicle-type.
   */
    @Post()
    @ApiOperation({ summary: 'Create new vehicle type' })
    @ApiBody({ type: CreateVehicletypeDto })
    @ApiResponse({
      status: 201,
      description: 'vehicle type created successfully.',
      type: CommonResponseDto,
    })
    @ApiResponse({
      status: 400,
      description: 'Bad Request - Invalid input data.',
    })
    @ApiResponse({
      status: 500,
      description: 'Internal Server Error - Server failure.',
      })
    async create(
      @Body() createVehicletypeDto: CreateVehicletypeDto,
      ):Promise<CommonResponseDto> {

      try {
         const response = await this.vehicletypeService.create(createVehicletypeDto);
         return new CommonResponseDto(
          true,
          'vehicle type created successfully.',
          response.document
        );

      } catch (error) {
         // Handle unexpected errors
              throw new HttpException(
                new CommonResponseDto(false, error.message, null),
                HttpStatus.INTERNAL_SERVER_ERROR,
              );
      }
    }




    /**
     * 
     * @returns 
     */

  @Get()
  findAll() {
    return this.vehicletypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicletypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicletypeDto: UpdateVehicletypeDto) {
    return this.vehicletypeService.update(+id, updateVehicletypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicletypeService.remove(+id);
  }
}
