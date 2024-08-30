import { Field, ID,Int,ObjectType } from '@nestjs/graphql';

import { Category } from '../../categories/models/category.model';
import { RentDurationEnum } from '../../shared/constants/rent-duration.constant';
import { User } from '../../users/models/user.model';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int, { nullable: true })
  rentPrice?: number;

  @Field(() => RentDurationEnum)
  rentDuration: RentDurationEnum;

  @Field(()=> Date, { nullable: true })
  rentFromDate?: Date;

  @Field(()=> Date, { nullable: true })
  rentToDate?: Date;

  @Field(() => [Category])
  categories: Category[];

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => User)
  owner: User;

  @Field(() => User, { nullable: true })
  seller?: User;

  @Field(() => User, { nullable: true })
  borrower?: User;

  @Field(() => User, { nullable: true })
  lender?: User;
}
