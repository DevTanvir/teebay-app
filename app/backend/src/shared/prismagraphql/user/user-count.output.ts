import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    purchasedProducts?: number;

    @Field(() => Int, {nullable:false})
    soldProducts?: number;

    @Field(() => Int, {nullable:false})
    borrowedProducts?: number;

    @Field(() => Int, {nullable:false})
    lentProducts?: number;
}
