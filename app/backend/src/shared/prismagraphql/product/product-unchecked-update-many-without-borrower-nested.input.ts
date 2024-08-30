import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutBorrowerInput } from './product-create-without-borrower.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutBorrowerInput } from './product-create-or-connect-without-borrower.input';
import { ProductUpsertWithWhereUniqueWithoutBorrowerInput } from './product-upsert-with-where-unique-without-borrower.input';
import { ProductCreateManyBorrowerInputEnvelope } from './product-create-many-borrower-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutBorrowerInput } from './product-update-with-where-unique-without-borrower.input';
import { ProductUpdateManyWithWhereWithoutBorrowerInput } from './product-update-many-with-where-without-borrower.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutBorrowerNestedInput {

    @Field(() => [ProductCreateWithoutBorrowerInput], {nullable:true})
    @Type(() => ProductCreateWithoutBorrowerInput)
    create?: Array<ProductCreateWithoutBorrowerInput>;

    @Field(() => [ProductCreateOrConnectWithoutBorrowerInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutBorrowerInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutBorrowerInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutBorrowerInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutBorrowerInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutBorrowerInput>;

    @Field(() => ProductCreateManyBorrowerInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyBorrowerInputEnvelope)
    createMany?: ProductCreateManyBorrowerInputEnvelope;

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

    @Field(() => [ProductUpdateWithWhereUniqueWithoutBorrowerInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutBorrowerInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutBorrowerInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutBorrowerInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutBorrowerInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutBorrowerInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
