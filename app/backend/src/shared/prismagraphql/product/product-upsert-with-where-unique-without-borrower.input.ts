import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutBorrowerInput } from './product-update-without-borrower.input';
import { ProductCreateWithoutBorrowerInput } from './product-create-without-borrower.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutBorrowerInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutBorrowerInput, {nullable:false})
    @Type(() => ProductUpdateWithoutBorrowerInput)
    update!: ProductUpdateWithoutBorrowerInput;

    @Field(() => ProductCreateWithoutBorrowerInput, {nullable:false})
    @Type(() => ProductCreateWithoutBorrowerInput)
    create!: ProductCreateWithoutBorrowerInput;
}
