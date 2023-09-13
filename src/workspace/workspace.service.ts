import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateWorkspaceDto } from './dto/createWorkspace.dto';
import { responseWorkspaceDto } from './dto/responseWorkspace.dto';

@Injectable()
export class WorkspaceService {
    constructor( private prisma: PrismaService) {}

    async create(workspace: CreateWorkspaceDto): Promise<responseWorkspaceDto> {
        const workspaceData = workspace;
        try {
            const newWorkspace = await this.prisma.workspace.create({
                data: workspaceData,
            });

            return newWorkspace;
        } catch (error) {
            console.log(error)
        }
    }
}
