import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyLenderInput } from './product-create-many-lender.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyLenderInputEnvelope {

    @Field(() => [ProductCreateManyLenderInput], {nullable:false})
    @Type(() => ProductCreateManyLenderInput)
    data!: Array<ProductCreateManyLenderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
