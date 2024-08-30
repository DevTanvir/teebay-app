import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentDuration } from './rent-duration.enum';

@InputType()
export class EnumRentDurationFieldUpdateOperationsInput {

    @Field(() => RentDuration, {nullable:true})
    set?: keyof typeof RentDuration;
}
