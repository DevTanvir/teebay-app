import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductUpdateManyWithoutOwnerNestedInput } from '../product/product-update-many-without-owner-nested.input';
import { ProductUpdateManyWithoutSellerNestedInput } from '../product/product-update-many-without-seller-nested.input';
import { ProductUpdateManyWithoutBorrowerNestedInput } from '../product/product-update-many-without-borrower-nested.input';
import { ProductUpdateManyWithoutLenderNestedInput } from '../product/product-update-many-without-lender-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductUpdateManyWithoutOwnerNestedInput, {nullable:true})
    purchasedProducts?: ProductUpdateManyWithoutOwnerNestedInput;

    @Field(() => ProductUpdateManyWithoutSellerNestedInput, {nullable:true})
    soldProducts?: ProductUpdateManyWithoutSellerNestedInput;

    @Field(() => ProductUpdateManyWithoutBorrowerNestedInput, {nullable:true})
    borrowedProducts?: ProductUpdateManyWithoutBorrowerNestedInput;

    @Field(() => ProductUpdateManyWithoutLenderNestedInput, {nullable:true})
    lentProducts?: ProductUpdateManyWithoutLenderNestedInput;
}
