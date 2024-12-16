import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, Matches } from "class-validator";


export class authLoginDto {
    @ApiProperty({ description: 'The username of the user' })
    @IsEmail()
    email: string;
  
    /* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character */
    @ApiProperty({ description: 'The password of the user' })
    @Matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
      { message: 'invalid password' },
    )
    password: string;
}