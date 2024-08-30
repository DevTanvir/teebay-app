import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyBorrowerInput } from './product-create-many-borrower.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyBorrowerInputEnvelope {

    @Field(() => [ProductCreateManyBorrowerInput], {nullable:false})
    @Type(() => ProductCreateManyBorrowerInput)
    data!: Array<ProductCreateManyBorrowerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
