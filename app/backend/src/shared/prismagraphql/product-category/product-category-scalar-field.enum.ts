import { registerEnumType } from '@nestjs/graphql';

export enum ProductCategoryScalarFieldEnum {
    productId = "productId",
    categoryId = "categoryId"
}


registerEnumType(ProductCategoryScalarFieldEnum, { name: 'ProductCategoryScalarFieldEnum', description: undefined })
