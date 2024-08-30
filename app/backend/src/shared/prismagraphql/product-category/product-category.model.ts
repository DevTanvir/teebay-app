import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { Category } from '../category/category.model';

@ObjectType()
export class ProductCategory {

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Product, {nullable:false})
    product?: Product;

    @Field(() => Category, {nullable:false})
    category?: Category;
}
