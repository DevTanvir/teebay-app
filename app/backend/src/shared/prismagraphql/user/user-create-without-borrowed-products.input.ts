import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutOwnerInput } from '../product/product-create-nested-many-without-owner.input';
import { ProductCreateNestedManyWithoutSellerInput } from '../product/product-create-nested-many-without-seller.input';
import { ProductCreateNestedManyWithoutLenderInput } from '../product/product-create-nested-many-without-lender.input';

@InputType()
export class UserCreateWithoutBorrowedProductsInput {

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

    @Field(() => ProductCreateNestedManyWithoutLenderInput, {nullable:true})
    lentProducts?: ProductCreateNestedManyWithoutLenderInput;
}
