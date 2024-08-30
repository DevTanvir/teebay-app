import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class ProductCategoryUncheckedUpdateManyWithoutProductInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: StringFieldUpdateOperationsInput;
}
