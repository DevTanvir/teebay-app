import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';

import { ProductOrderByWithRelationInput } from './product-order-by-with-relation.input';
import { ProductScalarFieldEnum } from './product-scalar-field.enum';
import { ProductWhereInput } from './product-where.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@ArgsType()
export class FindManyProductArgs {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}
