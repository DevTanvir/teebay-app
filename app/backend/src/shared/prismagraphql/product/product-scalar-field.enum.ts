import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    price = "price",
    rentPrice = "rentPrice",
    rentDuration = "rentDuration",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
