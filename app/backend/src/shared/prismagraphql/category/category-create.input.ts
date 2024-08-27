import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateNestedManyWithoutCategoryInput } from '../product-category/product-category-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductCategoryCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: ProductCategoryCreateNestedManyWithoutCategoryInput;
}
