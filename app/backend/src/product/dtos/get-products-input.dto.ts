import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString } from "class-validator";
import { PaginationParamsDto } from "src/shared/dtos/pagination-params.dto";

@InputType()
export class GetProductsInput extends PaginationParamsDto {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  ownerId?: string
}