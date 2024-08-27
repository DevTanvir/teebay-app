import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RentDuration } from '../prisma/rent-duration.enum';

@ObjectType()
export class ProductMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    rentPrice?: number;

    @Field(() => RentDuration, {nullable:true})
    rentDuration?: keyof typeof RentDuration;

    @Field(() => Date, {nullable:true})
    rentFromDate?: Date | string;

    @Field(() => Date, {nullable:true})
    rentToDate?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    ownerId?: string;

    @Field(() => String, {nullable:true})
    sellerId?: string;

    @Field(() => String, {nullable:true})
    borrowerId?: string;

    @Field(() => String, {nullable:true})
    lenderId?: string;
}
