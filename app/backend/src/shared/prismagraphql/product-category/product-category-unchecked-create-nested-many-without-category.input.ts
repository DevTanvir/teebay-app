import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutCategoryInput } from './product-category-create-without-category.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutCategoryInput } from './product-category-create-or-connect-without-category.input';
import { ProductCategoryCreateManyCategoryInputEnvelope } from './product-category-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@InputType()
export class ProductCategoryUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [ProductCategoryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutCategoryInput)
    create?: Array<ProductCategoryCreateWithoutCategoryInput>;

    @Field(() => [ProductCategoryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutCategoryInput>;

    @Field(() => ProductCategoryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCategoryCreateManyCategoryInputEnvelope)
    createMany?: ProductCategoryCreateManyCategoryInputEnvelope;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'productId_categoryId'>>;
}
