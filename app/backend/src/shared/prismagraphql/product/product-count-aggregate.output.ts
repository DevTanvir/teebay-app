import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    rentPrice!: number;

    @Field(() => Int, {nullable:false})
    rentDuration!: number;

    @Field(() => Int, {nullable:false})
    rentFromDate!: number;

    @Field(() => Int, {nullable:false})
    rentToDate!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    ownerId!: number;

    @Field(() => Int, {nullable:false})
    sellerId!: number;

    @Field(() => Int, {nullable:false})
    borrowerId!: number;

    @Field(() => Int, {nullable:false})
    lenderId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
