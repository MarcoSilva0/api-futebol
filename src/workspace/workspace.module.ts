import { Module } from '@nestjs/common';
import { WorkspaceController } from './workspace.controller';
import { WorkspaceService } from './workspace.service';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [WorkspaceController],
  providers: [WorkspaceService, PrismaService]
})
export class WorkspaceModule {}
