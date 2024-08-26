import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => String, { description: 'Email' })
  email: string;

  @Field(() => String, { description: 'Password' })
  password: string;
}
