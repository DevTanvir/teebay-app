import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RentDuration } from '../prisma/rent-duration.enum';
import { ProductCategory } from '../product-category/product-category.model';
import { User } from '../user/user.model';
import { ProductCount } from './product-count.output';

@ObjectType()
export class Product {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:true})
    rentPrice!: number | null;

    @Field(() => RentDuration, {nullable:false})
    rentDuration!: keyof typeof RentDuration;

    @Field(() => Date, {nullable:true})
    rentFromDate!: Date | null;

    @Field(() => Date, {nullable:true})
    rentToDate!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    ownerId!: string;

    @Field(() => String, {nullable:true})
    sellerId!: string | null;

    @Field(() => String, {nullable:true})
    borrowerId!: string | null;

    @Field(() => String, {nullable:true})
    lenderId!: string | null;

    @Field(() => [ProductCategory], {nullable:true})
    categories?: Array<ProductCategory>;

    @Field(() => User, {nullable:false})
    owner?: User;

    @Field(() => User, {nullable:true})
    seller?: User | null;

    @Field(() => User, {nullable:true})
    borrower?: User | null;

    @Field(() => User, {nullable:true})
    lender?: User | null;

    @Field(() => ProductCount, {nullable:false})
    _count?: ProductCount;
}
