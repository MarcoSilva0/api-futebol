import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { UserType } from './enum/user-type.enum';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/:workspaceId')
  async createUser(
    @Param('workspaceId') workspaceId: number,
    @Body() body: CreateUserDto,
  ): Promise<User> {
    return this.userService.createUser(workspaceId, body);
  }

  @Get()
  @Roles(UserType.ADMIN, UserType.USER)
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
