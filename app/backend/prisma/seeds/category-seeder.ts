import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const categorySeeder = async () => {
  const categories = [
    { name: 'Electronics' },
    { name: 'Outdoor' },
    { name: 'Sports' },
    { name: 'Fashion' },
    { name: 'Home Appliances' },
    { name: 'Toys' },
    { name: 'Books' },
  ];

  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }
}
