import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLentProductsInput } from './user-create-without-lent-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLentProductsInput } from './user-create-or-connect-without-lent-products.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutLentProductsInput {

    @Field(() => UserCreateWithoutLentProductsInput, {nullable:true})
    @Type(() => UserCreateWithoutLentProductsInput)
    create?: UserCreateWithoutLentProductsInput;

    @Field(() => UserCreateOrConnectWithoutLentProductsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLentProductsInput)
    connectOrCreate?: UserCreateOrConnectWithoutLentProductsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
