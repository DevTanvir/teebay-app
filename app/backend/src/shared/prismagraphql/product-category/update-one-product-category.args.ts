import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryUpdateInput } from './product-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@ArgsType()
export class UpdateOneProductCategoryArgs {

    @Field(() => ProductCategoryUpdateInput, {nullable:false})
    @Type(() => ProductCategoryUpdateInput)
    data!: ProductCategoryUpdateInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'productId_categoryId'>;
}
