import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryCreateManyInput } from './product-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductCategoryArgs {

    @Field(() => [ProductCategoryCreateManyInput], {nullable:false})
    @Type(() => ProductCategoryCreateManyInput)
    data!: Array<ProductCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
