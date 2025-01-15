import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ServiceCentersService } from './service-centers.service';
import { CreateServiceCenterDto } from './dto/create-service-center.dto';
import { UpdateServiceCenterDto } from './dto/update-service-center.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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

  @Get()
  findAll() {
    return this.serviceCentersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceCentersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceCenterDto: UpdateServiceCenterDto) {
    return this.serviceCentersService.update(+id, updateServiceCenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceCentersService.remove(+id);
  }
}
