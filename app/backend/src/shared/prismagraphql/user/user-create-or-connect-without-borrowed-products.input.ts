import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBorrowedProductsInput } from './user-create-without-borrowed-products.input';

@InputType()
export class UserCreateOrConnectWithoutBorrowedProductsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutBorrowedProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutBorrowedProductsInput)
    create!: UserCreateWithoutBorrowedProductsInput;
}
