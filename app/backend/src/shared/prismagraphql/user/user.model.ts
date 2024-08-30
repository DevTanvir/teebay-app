import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Product], {nullable:true})
    purchasedProducts?: Array<Product>;

    @Field(() => [Product], {nullable:true})
    soldProducts?: Array<Product>;

    @Field(() => [Product], {nullable:true})
    borrowedProducts?: Array<Product>;

    @Field(() => [Product], {nullable:true})
    lentProducts?: Array<Product>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
