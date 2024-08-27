import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutProductsInput } from '../category/category-create-nested-one-without-products.input';

@InputType()
export class ProductCategoryCreateWithoutProductInput {

    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutProductsInput;
}
