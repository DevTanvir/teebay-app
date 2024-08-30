import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSoldProductsInput } from './user-update-without-sold-products.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSoldProductsInput } from './user-create-without-sold-products.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutSoldProductsInput {

    @Field(() => UserUpdateWithoutSoldProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSoldProductsInput)
    update!: UserUpdateWithoutSoldProductsInput;

    @Field(() => UserCreateWithoutSoldProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutSoldProductsInput)
    create!: UserCreateWithoutSoldProductsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
