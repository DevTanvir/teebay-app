import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutOwnerInput } from '../product/product-unchecked-create-nested-many-without-owner.input';
import { ProductUncheckedCreateNestedManyWithoutSellerInput } from '../product/product-unchecked-create-nested-many-without-seller.input';
import { ProductUncheckedCreateNestedManyWithoutBorrowerInput } from '../product/product-unchecked-create-nested-many-without-borrower.input';

@InputType()
export class UserUncheckedCreateWithoutLentProductsInput {

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

    @Field(() => ProductUncheckedCreateNestedManyWithoutBorrowerInput, {nullable:true})
    borrowedProducts?: ProductUncheckedCreateNestedManyWithoutBorrowerInput;
}
