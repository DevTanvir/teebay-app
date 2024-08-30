import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutCategoriesNestedInput } from '../product/product-update-one-required-without-categories-nested.input';

@InputType()
export class ProductCategoryUpdateWithoutCategoryInput {

    @Field(() => ProductUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput;
}
