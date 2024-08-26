import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;
  
  @Field(() => String, { description: 'Your full name' })
  name: string;

  @Field(() => String, { description: 'Email Address' })
  email: string;

  @Field(() => String, { description: 'Phone Number' })
  password: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;
}
