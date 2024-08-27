import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryUncheckedCreateNestedManyWithoutCategoryInput } from '../product-category/product-category-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: ProductCategoryUncheckedCreateNestedManyWithoutCategoryInput;
}
