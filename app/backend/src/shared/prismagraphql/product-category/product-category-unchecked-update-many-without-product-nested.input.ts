import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutProductInput } from './product-category-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutProductInput } from './product-category-create-or-connect-without-product.input';
import { ProductCategoryUpsertWithWhereUniqueWithoutProductInput } from './product-category-upsert-with-where-unique-without-product.input';
import { ProductCategoryCreateManyProductInputEnvelope } from './product-category-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryUpdateWithWhereUniqueWithoutProductInput } from './product-category-update-with-where-unique-without-product.input';
import { ProductCategoryUpdateManyWithWhereWithoutProductInput } from './product-category-update-many-with-where-without-product.input';
import { ProductCategoryScalarWhereInput } from './product-category-scalar-where.input';

@InputType()
export class ProductCategoryUncheckedUpdateManyWithoutProductNestedInput {

    @Field(() => [ProductCategoryCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutProductInput)
    create?: Array<ProductCategoryCreateWithoutProductInput>;

    @Field(() => [ProductCategoryCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductCategoryUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductCategoryUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductCategoryCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductCategoryCreateManyProductInputEnvelope)
    createMany?: ProductCategoryCreateManyProductInputEnvelope;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'productId_categoryId'>>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'productId_categoryId'>>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'productId_categoryId'>>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'productId_categoryId'>>;

    @Field(() => [ProductCategoryUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductCategoryUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductCategoryUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ProductCategoryUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    @Type(() => ProductCategoryScalarWhereInput)
    deleteMany?: Array<ProductCategoryScalarWhereInput>;
}
