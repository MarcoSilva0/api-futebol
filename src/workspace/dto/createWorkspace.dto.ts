import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { TournamentType } from '../enum/tournament-type.enum';

export class CreateWorkspaceDto {
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
