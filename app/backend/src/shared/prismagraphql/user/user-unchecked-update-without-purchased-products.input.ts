import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductUncheckedUpdateManyWithoutSellerNestedInput } from '../product/product-unchecked-update-many-without-seller-nested.input';
import { ProductUncheckedUpdateManyWithoutBorrowerNestedInput } from '../product/product-unchecked-update-many-without-borrower-nested.input';
import { ProductUncheckedUpdateManyWithoutLenderNestedInput } from '../product/product-unchecked-update-many-without-lender-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutPurchasedProductsInput {

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

    @Field(() => ProductUncheckedUpdateManyWithoutSellerNestedInput, {nullable:true})
    soldProducts?: ProductUncheckedUpdateManyWithoutSellerNestedInput;

    @Field(() => ProductUncheckedUpdateManyWithoutBorrowerNestedInput, {nullable:true})
    borrowedProducts?: ProductUncheckedUpdateManyWithoutBorrowerNestedInput;

    @Field(() => ProductUncheckedUpdateManyWithoutLenderNestedInput, {nullable:true})
    lentProducts?: ProductUncheckedUpdateManyWithoutLenderNestedInput;
}
