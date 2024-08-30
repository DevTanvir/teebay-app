import { Expose } from 'class-transformer';

export class CategoryOutput {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  createdAt: Date | null;

  @Expose()
  updatedAt: Date | null;
}
