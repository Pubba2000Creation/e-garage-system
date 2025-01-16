import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ServiceCentersService } from './service-centers.service';
import { CreateServiceCenterDto } from './dto/create-service-center.dto';
import { UpdateServiceCenterDto } from './dto/update-service-center.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from '@app/common';

@Controller('service-centers')
@ApiTags('service-center oprations list')
export class ServiceCentersController {
  constructor(private readonly serviceCentersService: ServiceCentersService) {}
/*
  **
   * Endpoint to create new service-center.
   *
   * This endpoint Create new service-center. It retrieves database.
   * Returns a response containing new created service-center.
   *
   * @returns {Promise<CommonResponseDto>} A response object containing a success flag, message, and datails of the service-center.
   */
  @Post()
  @ApiOperation({ summary: 'Create new service center' })
  @ApiBody({ type: CreateServiceCenterDto })
  @ApiResponse({
    status: 201,
    description: 'Service center created successfully.',
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
    @Body() createServiceCenterDto: CreateServiceCenterDto,
  ): Promise<CommonResponseDto> {
    try {
      const response = await this.serviceCentersService.create(createServiceCenterDto);

      return new CommonResponseDto(
        true,
        'Service center created successfully.',
        response.document,
      );
    } catch (error) {
      // Handle unexpected errors
      throw new HttpException(
        new CommonResponseDto(false, error.message, null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
 /*
   * Endpoint for getting all service-center data
   *
   * @returns CommonResponseDto containing the result of the operation
   */
  @Get()
   @ApiOperation({ summary: 'get All service centers in database' })
   @ApiResponse({
    status: 201,
    description: 'Service centers getting successfully.',
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
 async findAll(): Promise<CommonResponseDto>{
   try {
    const response = await this.serviceCentersService.findAll();
    return new CommonResponseDto(
      true,
      'Service centers getting successfully.',
      response.documents,
    );
   } catch (error) {
    //error handling
    throw new HttpException(
      new CommonResponseDto(false, error.message, null),
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
   }
  }

  /**
 * Endpoint to retrieve a specific user by ID.
 *
 * This endpoint fetches the details of a user based on the provided ID.
 * Returns a response containing the user details if found, or an error message otherwise.
 *
 * @param {string} id - The ID of the user to retrieve.
 * @returns {Promise<CommonResponseDto>} A response object containing a success flag, message, and user details.
 */
  @Get(':id')
  @ApiOperation({ summary: 'Retrieve user details by ID' })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the user to retrieve',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'User details retrieved successfully.',
    type: CommonResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'service-center not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error - Server failure.',
  })
   async findOne(@Param('id') id: string):Promise<CommonResponseDto> {
    try {
      const responseData = await this.serviceCentersService.findOne(id);
      return new CommonResponseDto(
        true,
        responseData.message,
        responseData.document,
      );

    } catch (error) {
      //error handling
      throw new HttpException(
        new CommonResponseDto(false, error.message, null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * 
   * @param id 
   * @param updateServiceCenterDto 
   * @returns 
   */

  @Patch(':id')
   async update(@Param('id') id: string, @Body() updateServiceCenterDto: UpdateServiceCenterDto):Promise<CommonResponseDto> {
    try {

      //get the results form the system
      const responseData = await this.serviceCentersService.update(id, updateServiceCenterDto);

      //retuen new response form the system
      return new CommonResponseDto(
        true,
        responseData.message,
        responseData.document,
      );
      
    } catch (error) {
      //handel error
      throw new HttpException(
        new CommonResponseDto(false, error.message, null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceCentersService.remove(+id);
  }
}
