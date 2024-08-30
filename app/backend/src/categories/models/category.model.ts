import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Product } from '../../product/models/product.model';


@ObjectType()
export class Category {
  @Field(() => ID)
  id: string;
  
  @Field(() => String)
  name: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => [Product])
  products?: Product[];
}
