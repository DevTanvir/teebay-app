import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLentProductsInput } from './user-create-without-lent-products.input';

@InputType()
export class UserCreateOrConnectWithoutLentProductsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutLentProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutLentProductsInput)
    create!: UserCreateWithoutLentProductsInput;
}
