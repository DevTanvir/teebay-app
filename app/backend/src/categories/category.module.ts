import { Module } from '@nestjs/common';

import { PrismaService } from '../../prisma.service';
import { CategoryResolver } from './resolvers/category.resolver';
import { CategoryService } from './services/category.service';



@Module({
  providers: [PrismaService, CategoryResolver, CategoryService],
})
export class CategoryModule {}
