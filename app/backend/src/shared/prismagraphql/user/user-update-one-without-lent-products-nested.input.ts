import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLentProductsInput } from './user-create-without-lent-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLentProductsInput } from './user-create-or-connect-without-lent-products.input';
import { UserUpsertWithoutLentProductsInput } from './user-upsert-without-lent-products.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutLentProductsInput } from './user-update-to-one-with-where-without-lent-products.input';

@InputType()
export class UserUpdateOneWithoutLentProductsNestedInput {

    @Field(() => UserCreateWithoutLentProductsInput, {nullable:true})
    @Type(() => UserCreateWithoutLentProductsInput)
    create?: UserCreateWithoutLentProductsInput;

    @Field(() => UserCreateOrConnectWithoutLentProductsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLentProductsInput)
    connectOrCreate?: UserCreateOrConnectWithoutLentProductsInput;

    @Field(() => UserUpsertWithoutLentProductsInput, {nullable:true})
    @Type(() => UserUpsertWithoutLentProductsInput)
    upsert?: UserUpsertWithoutLentProductsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutLentProductsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutLentProductsInput)
    update?: UserUpdateToOneWithWhereWithoutLentProductsInput;
}
