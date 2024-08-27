import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductCategoryOrderByRelationAggregateInput } from '../product-category/product-category-order-by-relation-aggregate.input';

@InputType()
export class ProductOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    rentPrice?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    rentDuration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProductCategoryOrderByRelationAggregateInput, {nullable:true})
    categories?: ProductCategoryOrderByRelationAggregateInput;
}
