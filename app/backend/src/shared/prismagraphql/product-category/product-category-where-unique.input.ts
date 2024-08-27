import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryProductIdCategoryIdCompoundUniqueInput } from './product-category-product-id-category-id-compound-unique.input';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';

@InputType()
export class ProductCategoryWhereUniqueInput {

    @Field(() => ProductCategoryProductIdCategoryIdCompoundUniqueInput, {nullable:true})
    productId_categoryId?: ProductCategoryProductIdCategoryIdCompoundUniqueInput;

    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    AND?: Array<ProductCategoryWhereInput>;

    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    OR?: Array<ProductCategoryWhereInput>;

    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: CategoryRelationFilter;
}
