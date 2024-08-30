import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductCategoryUncheckedCreateWithoutProductInput {

    @Field(() => String, {nullable:false})
    categoryId!: string;
}
