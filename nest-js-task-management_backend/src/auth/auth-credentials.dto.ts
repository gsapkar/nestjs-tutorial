import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/(?=.*[0-9])/, { message: 'Password is too weak' })
  password: string;
}
