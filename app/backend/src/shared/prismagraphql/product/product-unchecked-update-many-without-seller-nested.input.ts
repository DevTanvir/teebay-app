import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSellerInput } from './product-create-without-seller.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSellerInput } from './product-create-or-connect-without-seller.input';
import { ProductUpsertWithWhereUniqueWithoutSellerInput } from './product-upsert-with-where-unique-without-seller.input';
import { ProductCreateManySellerInputEnvelope } from './product-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutSellerInput } from './product-update-with-where-unique-without-seller.input';
import { ProductUpdateManyWithWhereWithoutSellerInput } from './product-update-many-with-where-without-seller.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutSellerNestedInput {

    @Field(() => [ProductCreateWithoutSellerInput], {nullable:true})
    @Type(() => ProductCreateWithoutSellerInput)
    create?: Array<ProductCreateWithoutSellerInput>;

    @Field(() => [ProductCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutSellerInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutSellerInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutSellerInput>;

    @Field(() => ProductCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManySellerInputEnvelope)
    createMany?: ProductCreateManySellerInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutSellerInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutSellerInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutSellerInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutSellerInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutSellerInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
