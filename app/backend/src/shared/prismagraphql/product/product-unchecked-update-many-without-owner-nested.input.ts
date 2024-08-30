import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOwnerInput } from './product-create-without-owner.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutOwnerInput } from './product-create-or-connect-without-owner.input';
import { ProductUpsertWithWhereUniqueWithoutOwnerInput } from './product-upsert-with-where-unique-without-owner.input';
import { ProductCreateManyOwnerInputEnvelope } from './product-create-many-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutOwnerInput } from './product-update-with-where-unique-without-owner.input';
import { ProductUpdateManyWithWhereWithoutOwnerInput } from './product-update-many-with-where-without-owner.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutOwnerNestedInput {

    @Field(() => [ProductCreateWithoutOwnerInput], {nullable:true})
    @Type(() => ProductCreateWithoutOwnerInput)
    create?: Array<ProductCreateWithoutOwnerInput>;

    @Field(() => [ProductCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutOwnerInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutOwnerInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => ProductCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyOwnerInputEnvelope)
    createMany?: ProductCreateManyOwnerInputEnvelope;

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

    @Field(() => [ProductUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutOwnerInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutOwnerInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
