import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { UsersResolver } from './resolvers/users.resolver';
import { UsersService } from './services/users.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaService],
})
export class UsersModule {}
