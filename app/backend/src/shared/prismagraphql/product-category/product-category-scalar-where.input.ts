import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ProductCategoryScalarWhereInput {

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    AND?: Array<ProductCategoryScalarWhereInput>;

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    OR?: Array<ProductCategoryScalarWhereInput>;

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;
}
