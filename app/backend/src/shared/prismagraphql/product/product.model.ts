import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RentDuration } from '../prisma/rent-duration.enum';
import { ProductCategory } from '../product-category/product-category.model';
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

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [ProductCategory], {nullable:true})
    categories?: Array<ProductCategory>;

    @Field(() => ProductCount, {nullable:false})
    _count?: ProductCount;
}
