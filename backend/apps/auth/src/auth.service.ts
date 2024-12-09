import { Injectable, ConflictException } from '@nestjs/common';
import { UserRepository } from './user/user.repository';
import { AuthRegisterUserDto } from './dto/register.dto';
import { hash } from 'bcrypt';
import { UserType } from './user/enum/userType.enum';
import { UserRole } from './user/enum/userRole.enum';
import { UserStatus } from './user/enum/userStatus.enum';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(registerUserDto: AuthRegisterUserDto) {
    const { userEmail, phoneNumber, userPassword, userFirstName, userLastName } = registerUserDto;
  
    try {
      // Explicitly use a query with correct logic and logging
      const filterQuery = {
        $or: [
          { userEmail: userEmail },
          { phoneNumber: phoneNumber },
        ],
      };
  
      console.log('Filter Query Sent to DB:', filterQuery);
  
      const existingUser = await this.userRepository.findOne(filterQuery);
  
      console.log('Existing User Found:', existingUser);
  
      if (existingUser?.document) {
        throw new ConflictException(
          'A user with this email or phone number already exists.',
        );
      }
  
      // Hash the password securely
      const hashedPassword = await hash(userPassword, 10);
  
      // Proper payload creation for database
      const newUser = {
        userFirstName,
        userLastName,
        userEmail,
        phoneNumber,
        userPassword: hashedPassword,
        userType: UserType.USER,
        userRoles: [UserRole.USER],
        status: UserStatus.Active,
      };
  
      // Pass payload to repository for creation
      const userResponse = await this.userRepository.create(newUser);
  
      console.log('New user successfully created:', userResponse);
  
      return userResponse;
    } catch (error) {
      console.error('Error during user registration:', error);
      throw new Error(`Error creating user: ${error.message}`);
    }
  }
  
  
}
