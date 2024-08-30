import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBorrowedProductsInput } from './user-create-without-borrowed-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBorrowedProductsInput } from './user-create-or-connect-without-borrowed-products.input';
import { UserUpsertWithoutBorrowedProductsInput } from './user-upsert-without-borrowed-products.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutBorrowedProductsInput } from './user-update-to-one-with-where-without-borrowed-products.input';

@InputType()
export class UserUpdateOneWithoutBorrowedProductsNestedInput {

    @Field(() => UserCreateWithoutBorrowedProductsInput, {nullable:true})
    @Type(() => UserCreateWithoutBorrowedProductsInput)
    create?: UserCreateWithoutBorrowedProductsInput;

    @Field(() => UserCreateOrConnectWithoutBorrowedProductsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBorrowedProductsInput)
    connectOrCreate?: UserCreateOrConnectWithoutBorrowedProductsInput;

    @Field(() => UserUpsertWithoutBorrowedProductsInput, {nullable:true})
    @Type(() => UserUpsertWithoutBorrowedProductsInput)
    upsert?: UserUpsertWithoutBorrowedProductsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutBorrowedProductsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutBorrowedProductsInput)
    update?: UserUpdateToOneWithWhereWithoutBorrowedProductsInput;
}
