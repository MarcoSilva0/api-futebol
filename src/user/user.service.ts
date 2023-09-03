import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/createUser.dto';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/database/PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(
    workspaceId: number,
    createUserDto: CreateUserDto,
  ): Promise<User> {
    try {
      const saltOrRounds = 10;

      const passwordHash = await hash(createUserDto.password, saltOrRounds);

      const userData: Prisma.UserCreateInput = {
        ...createUserDto,
        Workspace: {
          connect: {
            id: Number(workspaceId),
          },
        },
        password: passwordHash,
      };

      const createdUser = await this.prisma.user.create({
        data: userData,
      });

      return createdUser;
    } catch (error) {
      console.log(error);
    }
  }

  async findUserByEmail(email: string): Promise<User> {
    try {
      const users = this.prisma.user.findFirst({
        where: {
          email: email,
        },
      });
      return users;
    } catch (error) {
      throw new NotFoundException(`Email: ${email} Not Found`);
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const users = this.prisma.user.findMany();
      return users;
    } catch (error) {
      console.log(error);
    }
  }
}
