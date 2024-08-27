import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductCategoryUncheckedUpdateManyWithoutCategoryNestedInput } from '../product-category/product-category-unchecked-update-many-without-category-nested.input';

@InputType()
export class CategoryUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ProductCategoryUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: ProductCategoryUncheckedUpdateManyWithoutCategoryNestedInput;
}
