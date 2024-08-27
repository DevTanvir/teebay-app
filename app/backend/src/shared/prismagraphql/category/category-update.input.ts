import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductCategoryUpdateManyWithoutCategoryNestedInput } from '../product-category/product-category-update-many-without-category-nested.input';

@InputType()
export class CategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ProductCategoryUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: ProductCategoryUpdateManyWithoutCategoryNestedInput;
}
