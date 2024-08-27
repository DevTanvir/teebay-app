import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumRentDurationFilter } from '../prisma/enum-rent-duration-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductCategoryListRelationFilter } from '../product-category/product-category-list-relation-filter.input';

@InputType()
export class ProductWhereInput {

    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rentPrice?: IntNullableFilter;

    @Field(() => EnumRentDurationFilter, {nullable:true})
    rentDuration?: EnumRentDurationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductCategoryListRelationFilter, {nullable:true})
    categories?: ProductCategoryListRelationFilter;
}
