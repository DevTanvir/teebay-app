import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryScalarWhereInput } from './product-category-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductCategoryUncheckedUpdateManyWithoutProductInput } from './product-category-unchecked-update-many-without-product.input';

@InputType()
export class ProductCategoryUpdateManyWithWhereWithoutProductInput {

    @Field(() => ProductCategoryScalarWhereInput, {nullable:false})
    @Type(() => ProductCategoryScalarWhereInput)
    where!: ProductCategoryScalarWhereInput;

    @Field(() => ProductCategoryUncheckedUpdateManyWithoutProductInput, {nullable:false})
    @Type(() => ProductCategoryUncheckedUpdateManyWithoutProductInput)
    data!: ProductCategoryUncheckedUpdateManyWithoutProductInput;
}
