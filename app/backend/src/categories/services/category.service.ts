import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.service";

import { CategoryOutput } from "../dtos/category-output.dto";


@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategories(): Promise<CategoryOutput[]> {
    const categories = await this.prisma.category.findMany();
    return categories
  }

  async getCategory(id: string): Promise<CategoryOutput> {
    const category = await this.prisma.category.findUnique({
      where: {
        id
      }
    });
    if(!category) throw new Error('Category not found');
    return category
  }

}