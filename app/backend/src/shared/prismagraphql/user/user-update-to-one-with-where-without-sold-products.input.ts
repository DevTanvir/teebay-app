import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSoldProductsInput } from './user-update-without-sold-products.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutSoldProductsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutSoldProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSoldProductsInput)
    data!: UserUpdateWithoutSoldProductsInput;
}
