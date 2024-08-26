import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { compare, hash } from 'bcrypt';

import { PrismaService } from '../../prisma.service';
import { CreateUserInput } from '../dto/create-user.input.dto';
import { LoginUserInput } from '../dto/login-user.input.dto';


@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService
  ) {}
  async create(input: CreateUserInput): Promise<User> {
    console.log(input);
    input.password = await hash(input.password, 10);
    const user = await this.prismaService.user.create({
      data: input
    });
    console.log('--', user);
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  async validateUser(input: LoginUserInput): Promise<User> {
    const user  = await this.prismaService.user.findUniqueOrThrow({
      where: {
        email: input.email
      }
    });

    const match = await compare(input.password, user.password);
    if (!match) throw new Error('Invalid password');

    return user;
  }

  async findOne(id: string): Promise<User> {
    const user  = await this.prismaService.user.findUniqueOrThrow({
      where: {
        id
      }
    });
    if (!user) throw new Error('User not found');
    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
