import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateManyProductInput } from './product-category-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCategoryCreateManyProductInputEnvelope {

    @Field(() => [ProductCategoryCreateManyProductInput], {nullable:false})
    @Type(() => ProductCategoryCreateManyProductInput)
    data!: Array<ProductCategoryCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
