import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RentDuration } from '../prisma/rent-duration.enum';
import { ProductCategoryCreateNestedManyWithoutProductInput } from '../product-category/product-category-create-nested-many-without-product.input';
import { UserCreateNestedOneWithoutSoldProductsInput } from '../user/user-create-nested-one-without-sold-products.input';
import { UserCreateNestedOneWithoutBorrowedProductsInput } from '../user/user-create-nested-one-without-borrowed-products.input';
import { UserCreateNestedOneWithoutLentProductsInput } from '../user/user-create-nested-one-without-lent-products.input';

@InputType()
export class ProductCreateWithoutOwnerInput {

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

    @Field(() => ProductCategoryCreateNestedManyWithoutProductInput, {nullable:true})
    categories?: ProductCategoryCreateNestedManyWithoutProductInput;

    @Field(() => UserCreateNestedOneWithoutSoldProductsInput, {nullable:true})
    seller?: UserCreateNestedOneWithoutSoldProductsInput;

    @Field(() => UserCreateNestedOneWithoutBorrowedProductsInput, {nullable:true})
    borrower?: UserCreateNestedOneWithoutBorrowedProductsInput;

    @Field(() => UserCreateNestedOneWithoutLentProductsInput, {nullable:true})
    lender?: UserCreateNestedOneWithoutLentProductsInput;
}
