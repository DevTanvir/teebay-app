import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    price = "price",
    rentPrice = "rentPrice",
    rentDuration = "rentDuration",
    rentFromDate = "rentFromDate",
    rentToDate = "rentToDate",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    ownerId = "ownerId",
    sellerId = "sellerId",
    borrowerId = "borrowerId",
    lenderId = "lenderId"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
