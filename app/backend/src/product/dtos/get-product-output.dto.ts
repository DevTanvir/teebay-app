import { Expose } from "class-transformer";


class Category {
  @Expose()
  productId: string;

  @Expose()
  categoryId: string;

  @Expose()
  category: string;
}

class Owner {
  @Expose()
  id: string;

  @Expose()
  name: string;
}

export class GetProductOutput {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  description: string | null;

  @Expose()
  price: number;

  @Expose()
  rentPrice: number | null;

  @Expose()
  rentDuration: string | null;

  @Expose()
  createdAt: Date | null;

  @Expose()
  updatedAt: Date | null;

  @Expose()
  owner: Owner;

  @Expose()
  categories: Category[];
}