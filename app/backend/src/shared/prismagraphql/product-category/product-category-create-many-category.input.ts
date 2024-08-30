import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductCategoryCreateManyCategoryInput {

    @Field(() => String, {nullable:false})
    productId!: string;
}
