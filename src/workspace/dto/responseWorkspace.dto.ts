import { ApiProperty } from '@nestjs/swagger';
import { TournamentType } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class responseWorkspaceDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  tournamentType: TournamentType;

  @ApiProperty()
  @IsOptional()
  pictureUrl: string;

  @ApiProperty()
  @IsOptional()
  ownerId: number;
}
