import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutOwnerInput } from './product-create-without-owner.input';

@InputType()
export class ProductCreateOrConnectWithoutOwnerInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutOwnerInput, {nullable:false})
    @Type(() => ProductCreateWithoutOwnerInput)
    create!: ProductCreateWithoutOwnerInput;
}
