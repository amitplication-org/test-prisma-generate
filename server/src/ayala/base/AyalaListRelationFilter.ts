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
import { AyalaWhereInput } from "./AyalaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AyalaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AyalaWhereInput,
  })
  @ValidateNested()
  @Type(() => AyalaWhereInput)
  @IsOptional()
  @Field(() => AyalaWhereInput, {
    nullable: true,
  })
  every?: AyalaWhereInput;

  @ApiProperty({
    required: false,
    type: () => AyalaWhereInput,
  })
  @ValidateNested()
  @Type(() => AyalaWhereInput)
  @IsOptional()
  @Field(() => AyalaWhereInput, {
    nullable: true,
  })
  some?: AyalaWhereInput;

  @ApiProperty({
    required: false,
    type: () => AyalaWhereInput,
  })
  @ValidateNested()
  @Type(() => AyalaWhereInput)
  @IsOptional()
  @Field(() => AyalaWhereInput, {
    nullable: true,
  })
  none?: AyalaWhereInput;
}
export { AyalaListRelationFilter };