import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ProductCreateInput } from './product-create.input';

@ArgsType()
export class CreateOneProductArgs {

    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    data!: ProductCreateInput;
}
