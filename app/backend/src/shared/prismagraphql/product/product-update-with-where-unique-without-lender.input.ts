import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutLenderInput } from './product-update-without-lender.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutLenderInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutLenderInput, {nullable:false})
    @Type(() => ProductUpdateWithoutLenderInput)
    data!: ProductUpdateWithoutLenderInput;
}
