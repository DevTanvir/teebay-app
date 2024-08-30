import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateInput } from './product-category-create.input';
import { ProductCategoryUpdateInput } from './product-category-update.input';

@ArgsType()
export class UpsertOneProductCategoryArgs {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'productId_categoryId'>;

    @Field(() => ProductCategoryCreateInput, {nullable:false})
    @Type(() => ProductCategoryCreateInput)
    create!: ProductCategoryCreateInput;

    @Field(() => ProductCategoryUpdateInput, {nullable:false})
    @Type(() => ProductCategoryUpdateInput)
    update!: ProductCategoryUpdateInput;
}
