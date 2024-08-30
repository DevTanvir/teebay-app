import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBorrowedProductsInput } from './user-create-without-borrowed-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBorrowedProductsInput } from './user-create-or-connect-without-borrowed-products.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutBorrowedProductsInput {

    @Field(() => UserCreateWithoutBorrowedProductsInput, {nullable:true})
    @Type(() => UserCreateWithoutBorrowedProductsInput)
    create?: UserCreateWithoutBorrowedProductsInput;

    @Field(() => UserCreateOrConnectWithoutBorrowedProductsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBorrowedProductsInput)
    connectOrCreate?: UserCreateOrConnectWithoutBorrowedProductsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
