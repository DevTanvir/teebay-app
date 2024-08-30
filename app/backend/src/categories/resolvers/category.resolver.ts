import { Args, Query, Resolver } from "@nestjs/graphql";

import { Category } from "../models/category.model";
import { CategoryService } from "../services/category.service";


@Resolver(() => Category)
export class CategoryResolver {
  constructor( private readonly categoryService: CategoryService ) {}
  
  @Query(() => [Category])
  getCategories() {
    const categories = this.categoryService.getCategories();
    if(!categories) {
      return []; 
    }
    return categories;
  }

  @Query(() => Category)
  getCategory(@Args('id') id: string) {
    const category = this.categoryService.getCategory(id);
    return category;
  }
}