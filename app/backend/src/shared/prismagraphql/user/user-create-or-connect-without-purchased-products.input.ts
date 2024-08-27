import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPurchasedProductsInput } from './user-create-without-purchased-products.input';

@InputType()
export class UserCreateOrConnectWithoutPurchasedProductsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutPurchasedProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutPurchasedProductsInput)
    create!: UserCreateWithoutPurchasedProductsInput;
}
