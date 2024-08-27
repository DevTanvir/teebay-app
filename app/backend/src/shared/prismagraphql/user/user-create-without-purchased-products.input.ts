import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutSellerInput } from '../product/product-create-nested-many-without-seller.input';
import { ProductCreateNestedManyWithoutBorrowerInput } from '../product/product-create-nested-many-without-borrower.input';
import { ProductCreateNestedManyWithoutLenderInput } from '../product/product-create-nested-many-without-lender.input';

@InputType()
export class UserCreateWithoutPurchasedProductsInput {

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

    @Field(() => ProductCreateNestedManyWithoutSellerInput, {nullable:true})
    soldProducts?: ProductCreateNestedManyWithoutSellerInput;

    @Field(() => ProductCreateNestedManyWithoutBorrowerInput, {nullable:true})
    borrowedProducts?: ProductCreateNestedManyWithoutBorrowerInput;

    @Field(() => ProductCreateNestedManyWithoutLenderInput, {nullable:true})
    lentProducts?: ProductCreateNestedManyWithoutLenderInput;
}
