import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ProductCategoryScalarWhereWithAggregatesInput {

    @Field(() => [ProductCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [ProductCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [ProductCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductCategoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categoryId?: StringWithAggregatesFilter;
}
