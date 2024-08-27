import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLentProductsInput } from './user-update-without-lent-products.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLentProductsInput } from './user-create-without-lent-products.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutLentProductsInput {

    @Field(() => UserUpdateWithoutLentProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLentProductsInput)
    update!: UserUpdateWithoutLentProductsInput;

    @Field(() => UserCreateWithoutLentProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutLentProductsInput)
    create!: UserCreateWithoutLentProductsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
