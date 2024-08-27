import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RentDuration } from '../prisma/rent-duration.enum';
import { ProductCategoryUncheckedCreateNestedManyWithoutProductInput } from '../product-category/product-category-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductUncheckedCreateInput {

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
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    categories?: ProductCategoryUncheckedCreateNestedManyWithoutProductInput;
}
