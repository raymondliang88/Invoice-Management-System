import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty({ minLength: 6 })
  @IsString()
  @MinLength(4)
  password: string;
}