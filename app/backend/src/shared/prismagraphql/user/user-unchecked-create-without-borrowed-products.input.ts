import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutOwnerInput } from '../product/product-unchecked-create-nested-many-without-owner.input';
import { ProductUncheckedCreateNestedManyWithoutSellerInput } from '../product/product-unchecked-create-nested-many-without-seller.input';
import { ProductUncheckedCreateNestedManyWithoutLenderInput } from '../product/product-unchecked-create-nested-many-without-lender.input';

@InputType()
export class UserUncheckedCreateWithoutBorrowedProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    purchasedProducts?: ProductUncheckedCreateNestedManyWithoutOwnerInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutSellerInput, {nullable:true})
    soldProducts?: ProductUncheckedCreateNestedManyWithoutSellerInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutLenderInput, {nullable:true})
    lentProducts?: ProductUncheckedCreateNestedManyWithoutLenderInput;
}
