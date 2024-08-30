import { Expose } from "class-transformer";

export class CreateProductOutput {
  @Expose()
  success: string

  @Expose()
  id: string
}