import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentDuration } from './rent-duration.enum';

@InputType()
export class NestedEnumRentDurationFilter {

    @Field(() => RentDuration, {nullable:true})
    equals?: keyof typeof RentDuration;

    @Field(() => [RentDuration], {nullable:true})
    in?: Array<keyof typeof RentDuration>;

    @Field(() => [RentDuration], {nullable:true})
    notIn?: Array<keyof typeof RentDuration>;

    @Field(() => NestedEnumRentDurationFilter, {nullable:true})
    not?: NestedEnumRentDurationFilter;
}
