import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPurchasedProductsInput } from './user-update-without-purchased-products.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPurchasedProductsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPurchasedProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPurchasedProductsInput)
    data!: UserUpdateWithoutPurchasedProductsInput;
}
