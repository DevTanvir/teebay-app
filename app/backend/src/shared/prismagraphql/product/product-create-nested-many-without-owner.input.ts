import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOwnerInput } from './product-create-without-owner.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutOwnerInput } from './product-create-or-connect-without-owner.input';
import { ProductCreateManyOwnerInputEnvelope } from './product-create-many-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutOwnerInput {

    @Field(() => [ProductCreateWithoutOwnerInput], {nullable:true})
    @Type(() => ProductCreateWithoutOwnerInput)
    create?: Array<ProductCreateWithoutOwnerInput>;

    @Field(() => [ProductCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutOwnerInput>;

    @Field(() => ProductCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyOwnerInputEnvelope)
    createMany?: ProductCreateManyOwnerInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
