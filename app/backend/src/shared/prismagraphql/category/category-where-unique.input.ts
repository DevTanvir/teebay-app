import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { ProductCategoryListRelationFilter } from '../product-category/product-category-list-relation-filter.input';

@InputType()
export class CategoryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;

    @Field(() => ProductCategoryListRelationFilter, {nullable:true})
    products?: ProductCategoryListRelationFilter;
}
