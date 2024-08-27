import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RentDuration } from '../prisma/rent-duration.enum';
import { ProductCategoryUncheckedCreateNestedManyWithoutProductInput } from '../product-category/product-category-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductUncheckedCreateWithoutOwnerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:true})
    rentPrice?: number;

    @Field(() => RentDuration, {nullable:false})
    rentDuration!: keyof typeof RentDuration;

    @Field(() => Date, {nullable:true})
    rentFromDate?: Date | string;

    @Field(() => Date, {nullable:true})
    rentToDate?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    sellerId?: string;

    @Field(() => String, {nullable:true})
    borrowerId?: string;

    @Field(() => String, {nullable:true})
    lenderId?: string;

    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    categories?: ProductCategoryUncheckedCreateNestedManyWithoutProductInput;
}
