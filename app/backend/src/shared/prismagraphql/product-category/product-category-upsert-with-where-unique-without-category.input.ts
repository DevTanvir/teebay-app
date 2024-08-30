import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCategoryUpdateWithoutCategoryInput } from './product-category-update-without-category.input';
import { ProductCategoryCreateWithoutCategoryInput } from './product-category-create-without-category.input';

@InputType()
export class ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'productId_categoryId'>;

    @Field(() => ProductCategoryUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutCategoryInput)
    update!: ProductCategoryUpdateWithoutCategoryInput;

    @Field(() => ProductCategoryCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutCategoryInput)
    create!: ProductCategoryCreateWithoutCategoryInput;
}
