import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductCategoryMaxAggregate {

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => String, {nullable:true})
    categoryId?: string;
}
