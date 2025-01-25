import { IsString, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";

export class CreateServiceCategoryDto { 
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;


    @IsBoolean()
    isActive: boolean;

    @IsString()
    createdBy?: string;

    // A utility method to ensure defaults
    static setDefaults(dto: CreateServiceCategoryDto, role: "admin" | "service-provider"): CreateServiceCategoryDto {
        dto.isActive = dto.isActive ?? (role === "admin");
        return dto;
    }
}
