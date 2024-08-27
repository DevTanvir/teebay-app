import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutCategoryInput } from './product-category-create-without-category.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutCategoryInput } from './product-category-create-or-connect-without-category.input';
import { ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput } from './product-category-upsert-with-where-unique-without-category.input';
import { ProductCategoryCreateManyCategoryInputEnvelope } from './product-category-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput } from './product-category-update-with-where-unique-without-category.input';
import { ProductCategoryUpdateManyWithWhereWithoutCategoryInput } from './product-category-update-many-with-where-without-category.input';
import { ProductCategoryScalarWhereInput } from './product-category-scalar-where.input';

@InputType()
export class ProductCategoryUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [ProductCategoryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutCategoryInput)
    create?: Array<ProductCategoryCreateWithoutCategoryInput>;

    @Field(() => [ProductCategoryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutCategoryInput>;

    @Field(() => [ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => ProductCategoryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCategoryCreateManyCategoryInputEnvelope)
    createMany?: ProductCategoryCreateManyCategoryInputEnvelope;

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

    @Field(() => [ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [ProductCategoryUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCategoryUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    @Type(() => ProductCategoryScalarWhereInput)
    deleteMany?: Array<ProductCategoryScalarWhereInput>;
}
