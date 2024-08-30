import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateManyCategoryInput } from './product-category-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCategoryCreateManyCategoryInputEnvelope {

    @Field(() => [ProductCategoryCreateManyCategoryInput], {nullable:false})
    @Type(() => ProductCategoryCreateManyCategoryInput)
    data!: Array<ProductCategoryCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
