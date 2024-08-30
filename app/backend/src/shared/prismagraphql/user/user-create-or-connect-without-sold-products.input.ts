import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSoldProductsInput } from './user-create-without-sold-products.input';

@InputType()
export class UserCreateOrConnectWithoutSoldProductsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutSoldProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutSoldProductsInput)
    create!: UserCreateWithoutSoldProductsInput;
}
