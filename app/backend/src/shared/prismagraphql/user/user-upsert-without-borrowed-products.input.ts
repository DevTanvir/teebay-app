import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutBorrowedProductsInput } from './user-update-without-borrowed-products.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBorrowedProductsInput } from './user-create-without-borrowed-products.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutBorrowedProductsInput {

    @Field(() => UserUpdateWithoutBorrowedProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutBorrowedProductsInput)
    update!: UserUpdateWithoutBorrowedProductsInput;

    @Field(() => UserCreateWithoutBorrowedProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutBorrowedProductsInput)
    create!: UserCreateWithoutBorrowedProductsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
