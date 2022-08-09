/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OnevalWhereInput } from "./OnevalWhereInput";
import { Type } from "class-transformer";
import { OnevalOrderByInput } from "./OnevalOrderByInput";

@ArgsType()
class OnevalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OnevalWhereInput,
  })
  @Field(() => OnevalWhereInput, { nullable: true })
  @Type(() => OnevalWhereInput)
  where?: OnevalWhereInput;

  @ApiProperty({
    required: false,
    type: [OnevalOrderByInput],
  })
  @Field(() => [OnevalOrderByInput], { nullable: true })
  @Type(() => OnevalOrderByInput)
  orderBy?: Array<OnevalOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { OnevalFindManyArgs };
