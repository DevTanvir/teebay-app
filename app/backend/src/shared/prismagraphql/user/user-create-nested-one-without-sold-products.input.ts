import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSoldProductsInput } from './user-create-without-sold-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSoldProductsInput } from './user-create-or-connect-without-sold-products.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSoldProductsInput {

    @Field(() => UserCreateWithoutSoldProductsInput, {nullable:true})
    @Type(() => UserCreateWithoutSoldProductsInput)
    create?: UserCreateWithoutSoldProductsInput;

    @Field(() => UserCreateOrConnectWithoutSoldProductsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSoldProductsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSoldProductsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
