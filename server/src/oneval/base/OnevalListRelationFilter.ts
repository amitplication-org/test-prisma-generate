/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OnevalWhereInput } from "./OnevalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OnevalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OnevalWhereInput,
  })
  @ValidateNested()
  @Type(() => OnevalWhereInput)
  @IsOptional()
  @Field(() => OnevalWhereInput, {
    nullable: true,
  })
  every?: OnevalWhereInput;

  @ApiProperty({
    required: false,
    type: () => OnevalWhereInput,
  })
  @ValidateNested()
  @Type(() => OnevalWhereInput)
  @IsOptional()
  @Field(() => OnevalWhereInput, {
    nullable: true,
  })
  some?: OnevalWhereInput;

  @ApiProperty({
    required: false,
    type: () => OnevalWhereInput,
  })
  @ValidateNested()
  @Type(() => OnevalWhereInput)
  @IsOptional()
  @Field(() => OnevalWhereInput, {
    nullable: true,
  })
  none?: OnevalWhereInput;
}
export { OnevalListRelationFilter };