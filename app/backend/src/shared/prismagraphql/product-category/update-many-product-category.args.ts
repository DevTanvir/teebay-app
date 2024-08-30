import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryUncheckedUpdateManyInput } from './product-category-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { ProductCategoryWhereInput } from './product-category-where.input';

@ArgsType()
export class UpdateManyProductCategoryArgs {

    @Field(() => ProductCategoryUncheckedUpdateManyInput, {nullable:false})
    @Type(() => ProductCategoryUncheckedUpdateManyInput)
    data!: ProductCategoryUncheckedUpdateManyInput;

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;
}
