import { Field, InputType, Int } from '@nestjs/graphql';

import { RentDurationEnum } from '../../shared/constants/rent-duration.constant';

@InputType()
export class UpdateProductInput {
  @Field(() => String, { description: 'Title', nullable: true})
  title?: string;

  @Field(() => String, { description: 'Description', nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  categoryIds?: string[];

  @Field(() => Int, { description: 'Price', nullable: true })
  price?: number;

  @Field(() => Int, { description: 'Rent price', nullable: true })
  rentPrice?: number;

  @Field(() => RentDurationEnum, { description: 'Rent duration', nullable: true })
  rentDuration?: RentDurationEnum;
}
