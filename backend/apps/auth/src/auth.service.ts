import { Injectable, ConflictException, NotFoundException, Logger } from '@nestjs/common';
import { UserRepository } from './user/user.repository';
import { AuthRegisterUserDto } from './dto/register.dto';
import { hash } from 'bcrypt';
import { UserType } from './user/enum/userType.enum';
import { UserRole } from './user/enum/userRole.enum';
import { UserStatus } from './user/enum/userStatus.enum';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}
  private readonly logger = new Logger(AuthService.name);

  async register(registerUserDto: AuthRegisterUserDto) {
    const { userEmail, phoneNumber, userPassword, userFirstName, userLastName } = registerUserDto;

    try {
      const filterQuery = { $or: [{ userEmail }, { phoneNumber }] };
      const existingUser = await this.userRepository.findOne(filterQuery);

      if (existingUser?.document) {
        throw new ConflictException('A user with this email or phone number already exists.');
      }

      const hashedPassword = await hash(userPassword, 10);
      const otp = this.generateOTP();
      const otpExpiresAt = new Date(Date.now() + 19 * 60 * 1000); // 19 minutes

      const newUser = {
        userFirstName,
        userLastName,
        userEmail,
        phoneNumber,
        userPassword: hashedPassword,
        userType: UserType.USER,
        userRoles: [UserRole.USER],
        status: UserStatus.Active,
        isVerified: false,
        verificationToken: otp,
        verificationExpiresAt: otpExpiresAt,
      };

      const userResponse = await this.userRepository.create(newUser);
      this.logger.log(`User registered with OTP: ${otp}`);
      return userResponse;
    } catch (error) {
      this.logger.error(`Error in register: ${error.message}`, error.stack);
      throw new ConflictException(error.message);
    }
  }

  private generateOTP(): number {
    return Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit number
  }

  async verifyOTP(otp: number) {
    try {
      // Log the start of the OTP verification process
      this.logger.log(`Verifying OTP: ${otp}`);
      
      // Fetch the user associated with the provided OTP
      const user = await this.userRepository.findOne({ verificationToken: otp });
  
      // Check if the user with the given OTP exists
      if (!user?.document) {
        // Log a warning and throw an error if the OTP is invalid
        this.logger.warn(`Invalid OTP: ${otp}`);
        throw new NotFoundException('User not found for given OTP');
      }

      if (user.document.isVerified) {
        // Log a warning and throw a ConflictException if the user is already verified
        this.logger.warn(`User already verified: ${user.document._id}`);
        throw new ConflictException('User already verified');
      }
  
      // Verify that the OTP is still within its valid time frame
      if (user.document.verificationExpiresAt > new Date()) {
        // Log a warning and throw an error if the OTP is expired
        this.logger.warn(`OTP not expired for user: ${user.document._id}`);
        throw new ConflictException('OTP not expired');
      }
  
      // Update the user's verification status in the database
      const updatedUser = await this.userRepository.findOneAndUpdate(
        { _id: user.document._id },
        { $set: { isVerified: true } }, // Set the isVerified flag to true
      );
  
      // Log the successful verification of the user
      this.logger.log(`User successfully verified: ${user.document._id}`);
      
      // Return the updated user object
      return updatedUser;
    } catch (error) {
      // Log the error details in case of failure during the OTP verification process
      this.logger.error(`Error verifying OTP: ${error.message}`, error.stack);
      
      // Re-throw the error to propagate it to the caller
      throw error;
    }
  }
  
  
  async resendOTP(userEmail: string) {

    //if email wos not provide
    if (!userEmail) {
      throw new NotFoundException('Email is required');
    }
    // Find the user by email
    const user = await this.userRepository.findOne({ userEmail });
  
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    // Check if the user is already verified
    if (user.document.isVerified) {
      // If user is verified, return message and user details
     throw new ConflictException('User already verified');
    }
  
    // Check if OTP is still valid
    if (user.document.verificationExpiresAt > new Date()) {
      throw new ConflictException('OTP not expired');
    }
  
    // Generate a new OTP
    const otp = this.generateOTP();
  
    // Update the user's OTP and expiration time
    const updatedUser = await this.userRepository.findOneAndUpdate(
      { _id: user.document._id },
      {
        $set: {
          verificationToken: otp,
          verificationExpiresAt: new Date(Date.now() + 19 * 60 * 1000), // 19 minutes
        },
      },
    );
  
    return updatedUser;
  }
  
}
