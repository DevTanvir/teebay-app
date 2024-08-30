import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutLenderInput } from './product-update-without-lender.input';
import { ProductCreateWithoutLenderInput } from './product-create-without-lender.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutLenderInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutLenderInput, {nullable:false})
    @Type(() => ProductUpdateWithoutLenderInput)
    update!: ProductUpdateWithoutLenderInput;

    @Field(() => ProductCreateWithoutLenderInput, {nullable:false})
    @Type(() => ProductCreateWithoutLenderInput)
    create!: ProductCreateWithoutLenderInput;
}
