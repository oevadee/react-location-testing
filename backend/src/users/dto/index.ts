import { IsInt, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class GetUserDto {
  @IsOptional()
  @IsInt()
  readonly username?: string;
  readonly id?: number;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly confirmPassword: string;
}
