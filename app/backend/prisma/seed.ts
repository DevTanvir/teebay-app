import { PrismaClient } from "@prisma/client";

import { categorySeeder } from "./seeds/category-seeder";

const prisma = new PrismaClient();
async function seed() {
  await Promise.resolve([categorySeeder()]);
}
seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });