import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateOneRequiredWithoutProductsNestedInput } from '../category/category-update-one-required-without-products-nested.input';

@InputType()
export class ProductCategoryUpdateWithoutProductInput {

    @Field(() => CategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput;
}
