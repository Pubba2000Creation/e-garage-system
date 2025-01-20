import { IsString, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";

export class CreateServiceCategoryDto { 
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;


}
