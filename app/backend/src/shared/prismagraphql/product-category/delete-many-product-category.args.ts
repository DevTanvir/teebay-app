import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProductCategoryArgs {

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;
}
