import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { ServiceCenterStatus } from "../enum/ServiceCenterStatus.enum";

export class CreateServiceCenterDto {

    @ApiProperty({description:'ID of the service center owner'})
    @IsNotEmpty()
    @IsString()
    userId: string;

    @ApiProperty({description:'Title of the service center'})
    @IsNotEmpty()
    @IsString()
    serviceTitle: string;

    @ApiProperty({description:'Categories of the service center'})
    @IsNotEmpty()
    @IsString()
    serviceCategories: string[];

    @ApiProperty({description:'Description of the service center'})
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({description:'Specialized vehicles of the service center'})
    @IsNotEmpty()
    @IsString()
    specializedVehicles: string[];

    @ApiProperty({description:'Mobile number of the service center'})
    @IsNotEmpty()
    @IsString()
    mobileNumber:string;

    @ApiProperty({description:'Telephone number of the service center'})
    @IsNotEmpty()
    @IsString()
    telephoneNumber?: string;

    @ApiProperty({description:'Longitude and latitude of the service center'})
    @IsNotEmpty()
    @IsString()
    locationURL: {
        longitude: string;
        latitude: string;
    };

    @ApiProperty({description:'images of the service-center'})
    @IsNotEmpty()
    @IsString()
    imageGallery: string[];

    @ApiProperty({description:' Owner name of the service center'})
    @IsNotEmpty()
    @IsNotEmpty()
    ownerName: string;

    @ApiProperty({description:'Owner NIC of the service center'})
    @IsNotEmpty()
    @IsString()
    ownerNIC: string;

    @ApiProperty({description:'Business registration certificate number of the service center'})
    @IsNotEmpty()
    @IsString()
    businessRegistrationCertificate: string;
    
    @ApiProperty({description:'The status of the service center'})
    @IsString()
    @IsNotEmpty()
    status?: ServiceCenterStatus; // Optional, defaults to PENDING



}
