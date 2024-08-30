import { registerEnumType } from "@nestjs/graphql";

export enum RentDurationEnum {
  HOUR = 'HOUR',
  DAY = 'DAY',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

registerEnumType(RentDurationEnum, {
  name: 'RentDuration', 
  description: 'The duration for which the product can be rented',
});