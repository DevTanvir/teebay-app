import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";


@InputType()
export class RentProductInput {
  @Field(() => String)
  @IsNotEmpty()
  borrowerId?: string

  @Field(() => Date)
  @IsNotEmpty()
  rentFromDate: Date

  @Field(() => Date)
  @IsNotEmpty()
  rentToDate: Date
}