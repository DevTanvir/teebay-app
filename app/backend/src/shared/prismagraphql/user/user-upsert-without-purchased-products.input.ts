import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPurchasedProductsInput } from './user-update-without-purchased-products.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPurchasedProductsInput } from './user-create-without-purchased-products.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPurchasedProductsInput {

    @Field(() => UserUpdateWithoutPurchasedProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPurchasedProductsInput)
    update!: UserUpdateWithoutPurchasedProductsInput;

    @Field(() => UserCreateWithoutPurchasedProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutPurchasedProductsInput)
    create!: UserCreateWithoutPurchasedProductsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
