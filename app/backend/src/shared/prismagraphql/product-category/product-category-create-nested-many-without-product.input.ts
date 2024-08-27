import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutProductInput } from './product-category-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutProductInput } from './product-category-create-or-connect-without-product.input';
import { ProductCategoryCreateManyProductInputEnvelope } from './product-category-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@InputType()
export class ProductCategoryCreateNestedManyWithoutProductInput {

    @Field(() => [ProductCategoryCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutProductInput)
    create?: Array<ProductCategoryCreateWithoutProductInput>;

    @Field(() => [ProductCategoryCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutProductInput>;

    @Field(() => ProductCategoryCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductCategoryCreateManyProductInputEnvelope)
    createMany?: ProductCategoryCreateManyProductInputEnvelope;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'productId_categoryId'>>;
}
