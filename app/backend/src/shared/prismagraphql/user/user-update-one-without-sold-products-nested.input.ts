import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSoldProductsInput } from './user-create-without-sold-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSoldProductsInput } from './user-create-or-connect-without-sold-products.input';
import { UserUpsertWithoutSoldProductsInput } from './user-upsert-without-sold-products.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutSoldProductsInput } from './user-update-to-one-with-where-without-sold-products.input';

@InputType()
export class UserUpdateOneWithoutSoldProductsNestedInput {

    @Field(() => UserCreateWithoutSoldProductsInput, {nullable:true})
    @Type(() => UserCreateWithoutSoldProductsInput)
    create?: UserCreateWithoutSoldProductsInput;

    @Field(() => UserCreateOrConnectWithoutSoldProductsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSoldProductsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSoldProductsInput;

    @Field(() => UserUpsertWithoutSoldProductsInput, {nullable:true})
    @Type(() => UserUpsertWithoutSoldProductsInput)
    upsert?: UserUpsertWithoutSoldProductsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutSoldProductsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutSoldProductsInput)
    update?: UserUpdateToOneWithWhereWithoutSoldProductsInput;
}
