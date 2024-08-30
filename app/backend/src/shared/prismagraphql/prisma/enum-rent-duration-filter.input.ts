import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentDuration } from './rent-duration.enum';
import { NestedEnumRentDurationFilter } from './nested-enum-rent-duration-filter.input';

@InputType()
export class EnumRentDurationFilter {

    @Field(() => RentDuration, {nullable:true})
    equals?: keyof typeof RentDuration;

    @Field(() => [RentDuration], {nullable:true})
    in?: Array<keyof typeof RentDuration>;

    @Field(() => [RentDuration], {nullable:true})
    notIn?: Array<keyof typeof RentDuration>;

    @Field(() => NestedEnumRentDurationFilter, {nullable:true})
    not?: NestedEnumRentDurationFilter;
}
