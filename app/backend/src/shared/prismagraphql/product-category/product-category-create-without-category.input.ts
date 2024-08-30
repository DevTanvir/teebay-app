import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutCategoriesInput } from '../product/product-create-nested-one-without-categories.input';

@InputType()
export class ProductCategoryCreateWithoutCategoryInput {

    @Field(() => ProductCreateNestedOneWithoutCategoriesInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutCategoriesInput;
}
