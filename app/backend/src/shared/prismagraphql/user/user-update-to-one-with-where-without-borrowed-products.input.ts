import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutBorrowedProductsInput } from './user-update-without-borrowed-products.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutBorrowedProductsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutBorrowedProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutBorrowedProductsInput)
    data!: UserUpdateWithoutBorrowedProductsInput;
}
