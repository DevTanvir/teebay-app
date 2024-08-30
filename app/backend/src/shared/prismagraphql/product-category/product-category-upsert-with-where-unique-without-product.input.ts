import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCategoryUpdateWithoutProductInput } from './product-category-update-without-product.input';
import { ProductCategoryCreateWithoutProductInput } from './product-category-create-without-product.input';

@InputType()
export class ProductCategoryUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'productId_categoryId'>;

    @Field(() => ProductCategoryUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutProductInput)
    update!: ProductCategoryUpdateWithoutProductInput;

    @Field(() => ProductCategoryCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutProductInput)
    create!: ProductCategoryCreateWithoutProductInput;
}
