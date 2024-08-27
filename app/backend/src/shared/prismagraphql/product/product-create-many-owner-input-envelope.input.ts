import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyOwnerInput } from './product-create-many-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyOwnerInputEnvelope {

    @Field(() => [ProductCreateManyOwnerInput], {nullable:false})
    @Type(() => ProductCreateManyOwnerInput)
    data!: Array<ProductCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
