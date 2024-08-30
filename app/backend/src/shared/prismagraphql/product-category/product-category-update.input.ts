import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutCategoriesNestedInput } from '../product/product-update-one-required-without-categories-nested.input';
import { CategoryUpdateOneRequiredWithoutProductsNestedInput } from '../category/category-update-one-required-without-products-nested.input';

@InputType()
export class ProductCategoryUpdateInput {

    @Field(() => ProductUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput;

    @Field(() => CategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput;
}
