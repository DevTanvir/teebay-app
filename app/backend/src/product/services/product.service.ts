import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'prisma.service';

import { CreateProductInput } from '../dtos/create-product-input.dto';
import { CreateProductOutput } from '../dtos/create-product-output.dto';
import { GetProductOutput } from '../dtos/get-product-output.dto';
import { GetProductsInput } from '../dtos/get-products-input.dto';
import { UpdateProductInput } from '../dtos/update-product-input.dto';


@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async createProduct(input: CreateProductInput, ownerId: string): Promise<CreateProductOutput> {
    const { categoryIds, ...productData } = input;

    const product = await this.prisma.product.create({
      data: {
        ...productData,
        ownerId,
        sellerId: null,
        borrowerId: null,
        lenderId: null,
        categories: {
          create: categoryIds.map((categoryId) => ({
            category: {
              connect: { id: categoryId },
            },
          })),
        },
      },
    });

    const output: CreateProductOutput = {
      success: 'Product created successfully',
      id: product.id,
    }
    return output;
  }



  async getAllProducts(input: GetProductsInput): Promise<GetProductOutput[]> {
    
    let findManyInput = {
      skip: input.offset,
      take: input.limit,
      where: {},
      include: {
        owner: {
          select: {
            id: true,
            name: true,
          }
        },
        categories: {
          include: {
            category: {
              select: {
                name: true,
              }
            },
          },
        },
      }
    }
    
    if (input.ownerId) {
      findManyInput = { ...findManyInput,
        where: {
          ownerId: input.ownerId
        }
      }
    }

    const products = await this.prisma.product.findMany(findManyInput);

    const modifiedProductOutput: GetProductOutput[] = products.map(product => {
      return {
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        rentPrice: product.rentPrice,
        rentDuration: product.rentDuration,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        owner: {
          id: product.owner.id,
          name: product.owner.name
        },
        categories: product.categories.map(categoryObj => ({
          productId: categoryObj.productId,
          categoryId: categoryObj.categoryId,
          category: categoryObj.category.name
      })),
    }});

    return modifiedProductOutput;
  }

  async getProduct(id: string): Promise<Product> {
    const product  = await this.prisma.product.findUniqueOrThrow({
      where: {
        id
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
          }
        },
        categories: {
          include: {
            category: true,
          },
        },
      }
    });

    if (!product) throw new Error('Product not found');
    return product;
  }

  async updateProduct(
    productId: string,
    ownerId: string,
    input: UpdateProductInput,
  ): Promise<Product> {
    const isOwner = await this.prisma.product.findUnique({
      where: {
        id: productId
      },
    })

    if (isOwner?.ownerId !== ownerId) throw new Error('You are not the owner of this product');
    
    const { categoryIds, ...productData } = input;

  
    const updatedProduct = await this.prisma.product.update({
      where: { id: productId },
      data: {
        ...Object.keys(productData).length > 0 && productData,
        // Handle categories separately
        ...(categoryIds && {
          categories: {
            deleteMany: {},
            create: categoryIds.map((categoryId) => ({
              category: {
                connect: { id: categoryId },
              },
            })),
          },
        }),
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
          },
        },
        categories: {
          include: {
            category: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  
    return updatedProduct;
  }
  

  async removeProduct(productId: string, ownerId: string): Promise<Product> {
    const isOwner = await this.prisma.product.findUnique({
      where: {
        id: productId
      },
    })
    if (isOwner?.ownerId !== ownerId) throw new Error('You are not the owner of this product');


    await this.prisma.productCategory.deleteMany({
      where: { productId },
    });
  
    const deletedProduct = await this.prisma.product.delete({
      where: { id: productId },
      include: {
        owner: true,
        categories: {
          include: {
            category: true,
          },
        },
      },
    });
  
    return deletedProduct;
  }
  
}
