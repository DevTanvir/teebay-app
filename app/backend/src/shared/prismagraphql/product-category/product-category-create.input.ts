import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutCategoriesInput } from '../product/product-create-nested-one-without-categories.input';
import { CategoryCreateNestedOneWithoutProductsInput } from '../category/category-create-nested-one-without-products.input';

@InputType()
export class ProductCategoryCreateInput {

    @Field(() => ProductCreateNestedOneWithoutCategoriesInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutCategoriesInput;

    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutProductsInput;
}
