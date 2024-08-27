import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutOwnerInput } from '../product/product-unchecked-create-nested-many-without-owner.input';
import { ProductUncheckedCreateNestedManyWithoutBorrowerInput } from '../product/product-unchecked-create-nested-many-without-borrower.input';
import { ProductUncheckedCreateNestedManyWithoutLenderInput } from '../product/product-unchecked-create-nested-many-without-lender.input';

@InputType()
export class UserUncheckedCreateWithoutSoldProductsInput {

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

    @Field(() => ProductUncheckedCreateNestedManyWithoutBorrowerInput, {nullable:true})
    borrowedProducts?: ProductUncheckedCreateNestedManyWithoutBorrowerInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutLenderInput, {nullable:true})
    lentProducts?: ProductUncheckedCreateNestedManyWithoutLenderInput;
}
