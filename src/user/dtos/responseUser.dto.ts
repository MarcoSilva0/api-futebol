import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class ResponseUserDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  permission: string;

  @ApiProperty()
  @IsNotEmpty()
  documentIdentifier: string;

  @ApiProperty()
  @IsOptional()
  birthday: Date;

  @ApiProperty()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsOptional()
  picture: string;

  constructor(user: User) {
    this.name = user.name;
    this.email = user.email;
    this.permission = user.permission;
    this.documentIdentifier = user.documentIdentifier;
    this.birthday = user.birthday;
    this.phone = user.phone;
    this.picture = user.picture;
  }
}
