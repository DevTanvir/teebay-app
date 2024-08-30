import { registerEnumType } from '@nestjs/graphql';

export enum RentDuration {
    HOUR = "HOUR",
    DAY = "DAY",
    MONTH = "MONTH",
    YEAR = "YEAR"
}


registerEnumType(RentDuration, { name: 'RentDuration', description: undefined })
