import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentDuration } from './rent-duration.enum';
import { NestedEnumRentDurationWithAggregatesFilter } from './nested-enum-rent-duration-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRentDurationFilter } from './nested-enum-rent-duration-filter.input';

@InputType()
export class EnumRentDurationWithAggregatesFilter {

    @Field(() => RentDuration, {nullable:true})
    equals?: keyof typeof RentDuration;

    @Field(() => [RentDuration], {nullable:true})
    in?: Array<keyof typeof RentDuration>;

    @Field(() => [RentDuration], {nullable:true})
    notIn?: Array<keyof typeof RentDuration>;

    @Field(() => NestedEnumRentDurationWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRentDurationWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRentDurationFilter, {nullable:true})
    _min?: NestedEnumRentDurationFilter;

    @Field(() => NestedEnumRentDurationFilter, {nullable:true})
    _max?: NestedEnumRentDurationFilter;
}
