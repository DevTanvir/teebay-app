import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutOwnerInput } from '../product/product-create-nested-many-without-owner.input';
import { ProductCreateNestedManyWithoutSellerInput } from '../product/product-create-nested-many-without-seller.input';
import { ProductCreateNestedManyWithoutBorrowerInput } from '../product/product-create-nested-many-without-borrower.input';

@InputType()
export class UserCreateWithoutLentProductsInput {

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

    @Field(() => ProductCreateNestedManyWithoutSellerInput, {nullable:true})
    soldProducts?: ProductCreateNestedManyWithoutSellerInput;

    @Field(() => ProductCreateNestedManyWithoutBorrowerInput, {nullable:true})
    borrowedProducts?: ProductCreateNestedManyWithoutBorrowerInput;
}
