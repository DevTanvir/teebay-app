import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateProductInput } from '../dtos/create-product-input.dto';
import { GetProductsInput } from '../dtos/get-products-input.dto';
import { UpdateProductInput } from '../dtos/update-product-input.dto';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';


@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  getProducts(@Args('input') input: GetProductsInput) {
    const products = this.productService.getAllProducts(input);
    if(!products) {
      return []
    }
    return products;
  }

  @Query(() => Product)
  getProduct(@Args('id', { type: () => String }) id: string) {
    const product = this.productService.getProduct(id);
    return product
  }

  @Mutation(() => Product)
  createProduct(@Args('input') input: CreateProductInput, @Args('ownerId') ownerId: string) {
    const product = this.productService.createProduct(input, ownerId);
    return product
  }

  @Mutation(() => Product)
  updateProduct(@Args('id') id: string, @Args('ownerId') ownerId: string, @Args('input') input: UpdateProductInput) {
    const product = this.productService.updateProduct(id, ownerId, input);
    return product
  }

  @Mutation(() => Product)
  removeProduct(@Args('id') id: string, @Args('ownerId') ownerId: string) {
    const product = this.productService.removeProduct(id, ownerId);
    return product
  }

}
