import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutSellerInput } from './product-update-without-seller.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutSellerInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutSellerInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSellerInput)
    data!: ProductUpdateWithoutSellerInput;
}
