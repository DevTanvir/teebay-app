import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutBorrowerInput } from './product-create-without-borrower.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutBorrowerInput } from './product-create-or-connect-without-borrower.input';
import { ProductCreateManyBorrowerInputEnvelope } from './product-create-many-borrower-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutBorrowerInput {

    @Field(() => [ProductCreateWithoutBorrowerInput], {nullable:true})
    @Type(() => ProductCreateWithoutBorrowerInput)
    create?: Array<ProductCreateWithoutBorrowerInput>;

    @Field(() => [ProductCreateOrConnectWithoutBorrowerInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutBorrowerInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutBorrowerInput>;

    @Field(() => ProductCreateManyBorrowerInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyBorrowerInputEnvelope)
    createMany?: ProductCreateManyBorrowerInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
