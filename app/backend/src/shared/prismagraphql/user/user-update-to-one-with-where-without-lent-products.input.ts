import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutLentProductsInput } from './user-update-without-lent-products.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutLentProductsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutLentProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLentProductsInput)
    data!: UserUpdateWithoutLentProductsInput;
}
