import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPurchasedProductsInput } from './user-create-without-purchased-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPurchasedProductsInput } from './user-create-or-connect-without-purchased-products.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPurchasedProductsInput {

    @Field(() => UserCreateWithoutPurchasedProductsInput, {nullable:true})
    @Type(() => UserCreateWithoutPurchasedProductsInput)
    create?: UserCreateWithoutPurchasedProductsInput;

    @Field(() => UserCreateOrConnectWithoutPurchasedProductsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPurchasedProductsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPurchasedProductsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
