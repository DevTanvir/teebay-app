import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EnumRentDurationFieldUpdateOperationsInput } from '../prisma/enum-rent-duration-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPurchasedProductsNestedInput } from '../user/user-update-one-required-without-purchased-products-nested.input';
import { UserUpdateOneWithoutSoldProductsNestedInput } from '../user/user-update-one-without-sold-products-nested.input';
import { UserUpdateOneWithoutBorrowedProductsNestedInput } from '../user/user-update-one-without-borrowed-products-nested.input';
import { UserUpdateOneWithoutLentProductsNestedInput } from '../user/user-update-one-without-lent-products-nested.input';

@InputType()
export class ProductUpdateWithoutCategoriesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    rentPrice?: NullableIntFieldUpdateOperationsInput;

    @Field(() => EnumRentDurationFieldUpdateOperationsInput, {nullable:true})
    rentDuration?: EnumRentDurationFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    rentFromDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    rentToDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPurchasedProductsNestedInput, {nullable:true})
    owner?: UserUpdateOneRequiredWithoutPurchasedProductsNestedInput;

    @Field(() => UserUpdateOneWithoutSoldProductsNestedInput, {nullable:true})
    seller?: UserUpdateOneWithoutSoldProductsNestedInput;

    @Field(() => UserUpdateOneWithoutBorrowedProductsNestedInput, {nullable:true})
    borrower?: UserUpdateOneWithoutBorrowedProductsNestedInput;

    @Field(() => UserUpdateOneWithoutLentProductsNestedInput, {nullable:true})
    lender?: UserUpdateOneWithoutLentProductsNestedInput;
}
