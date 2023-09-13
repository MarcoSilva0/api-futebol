import { Body, Controller, Post } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/createWorkspace.dto';
import { responseWorkspaceDto } from './dto/responseWorkspace.dto';
import { WorkspaceService } from './workspace.service';

@Controller('workspace')
export class WorkspaceController {
    constructor(private readonly workspaceService: WorkspaceService) {}

    @Post()
    async create(@Body() body: CreateWorkspaceDto): Promise<responseWorkspaceDto> {
        return this.workspaceService.create(body);
    }
}
