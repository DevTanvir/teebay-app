import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryScalarWhereInput } from './product-category-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductCategoryUncheckedUpdateManyWithoutCategoryInput } from './product-category-unchecked-update-many-without-category.input';

@InputType()
export class ProductCategoryUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => ProductCategoryScalarWhereInput, {nullable:false})
    @Type(() => ProductCategoryScalarWhereInput)
    where!: ProductCategoryScalarWhereInput;

    @Field(() => ProductCategoryUncheckedUpdateManyWithoutCategoryInput, {nullable:false})
    @Type(() => ProductCategoryUncheckedUpdateManyWithoutCategoryInput)
    data!: ProductCategoryUncheckedUpdateManyWithoutCategoryInput;
}
