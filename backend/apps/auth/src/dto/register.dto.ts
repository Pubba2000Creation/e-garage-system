import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";


export class AuthRegisterUserDto {
    @ApiProperty({description: 'name of the user'})
    @IsString()
    name: String;

    @ApiProperty({description:'the email of the user'})
    @IsEmail()
    email:String;

    @ApiProperty({description:'the password of the user'})
    password:String

}
