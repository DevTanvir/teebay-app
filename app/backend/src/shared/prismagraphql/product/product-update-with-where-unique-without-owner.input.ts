import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutOwnerInput } from './product-update-without-owner.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => ProductUpdateWithoutOwnerInput)
    data!: ProductUpdateWithoutOwnerInput;
}
