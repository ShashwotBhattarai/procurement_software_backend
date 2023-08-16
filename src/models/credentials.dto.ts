import { IsNotEmpty, IsString } from 'class-validator';

export class CredentialsDto {
  @IsNotEmpty({ message: "user's fullname must not be empty" })
  @IsString({ message: "user's fullname must be string" })
  fullname: string;
  @IsNotEmpty({ message: "user's username must not be empty" })
  @IsString({ message: "user's username must be string" })
  username: string;
  @IsNotEmpty({ message: "user's password must not be empty" })
  @IsString({ message: "user's password must be string" })
  password: string;
  @IsNotEmpty({ message: "user's role must not be empty" })
  @IsString({ message: "user's role must be string" })
  role: string;
}
