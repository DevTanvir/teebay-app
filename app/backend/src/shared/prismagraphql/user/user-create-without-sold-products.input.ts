import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutOwnerInput } from '../product/product-create-nested-many-without-owner.input';
import { ProductCreateNestedManyWithoutBorrowerInput } from '../product/product-create-nested-many-without-borrower.input';
import { ProductCreateNestedManyWithoutLenderInput } from '../product/product-create-nested-many-without-lender.input';

@InputType()
export class UserCreateWithoutSoldProductsInput {

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

    @Field(() => ProductCreateNestedManyWithoutOwnerInput, {nullable:true})
    purchasedProducts?: ProductCreateNestedManyWithoutOwnerInput;

    @Field(() => ProductCreateNestedManyWithoutBorrowerInput, {nullable:true})
    borrowedProducts?: ProductCreateNestedManyWithoutBorrowerInput;

    @Field(() => ProductCreateNestedManyWithoutLenderInput, {nullable:true})
    lentProducts?: ProductCreateNestedManyWithoutLenderInput;
}
