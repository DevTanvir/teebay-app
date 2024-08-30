import { Field, InputType, Int } from '@nestjs/graphql';

import { RentDurationEnum } from '../../shared/constants/rent-duration.constant';

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'Title' })
  title: string;

  @Field(() => String, { description: 'Description' })
  description?: string;

  @Field(() => [String])
  categoryIds: string[];

  @Field(() => Int, { description: 'Price' })
  price: number;

  @Field(() => Int, { description: 'Rent price' })
  rentPrice: number;

  @Field(() => RentDurationEnum, { description: 'Rent duration' })
  rentDuration: RentDurationEnum;
}
