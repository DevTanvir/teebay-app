import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutLenderInput } from './product-create-without-lender.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutLenderInput } from './product-create-or-connect-without-lender.input';
import { ProductUpsertWithWhereUniqueWithoutLenderInput } from './product-upsert-with-where-unique-without-lender.input';
import { ProductCreateManyLenderInputEnvelope } from './product-create-many-lender-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutLenderInput } from './product-update-with-where-unique-without-lender.input';
import { ProductUpdateManyWithWhereWithoutLenderInput } from './product-update-many-with-where-without-lender.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutLenderNestedInput {

    @Field(() => [ProductCreateWithoutLenderInput], {nullable:true})
    @Type(() => ProductCreateWithoutLenderInput)
    create?: Array<ProductCreateWithoutLenderInput>;

    @Field(() => [ProductCreateOrConnectWithoutLenderInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutLenderInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutLenderInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutLenderInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutLenderInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutLenderInput>;

    @Field(() => ProductCreateManyLenderInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyLenderInputEnvelope)
    createMany?: ProductCreateManyLenderInputEnvelope;

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

    @Field(() => [ProductUpdateWithWhereUniqueWithoutLenderInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutLenderInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutLenderInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutLenderInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutLenderInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutLenderInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
