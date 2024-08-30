import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutLenderInput } from './product-create-without-lender.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutLenderInput } from './product-create-or-connect-without-lender.input';
import { ProductCreateManyLenderInputEnvelope } from './product-create-many-lender-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutLenderInput {

    @Field(() => [ProductCreateWithoutLenderInput], {nullable:true})
    @Type(() => ProductCreateWithoutLenderInput)
    create?: Array<ProductCreateWithoutLenderInput>;

    @Field(() => [ProductCreateOrConnectWithoutLenderInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutLenderInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutLenderInput>;

    @Field(() => ProductCreateManyLenderInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyLenderInputEnvelope)
    createMany?: ProductCreateManyLenderInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
