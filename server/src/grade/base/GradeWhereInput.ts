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
import { AyalaWhereUniqueInput } from "../../ayala/base/AyalaWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { TestWhereUniqueInput } from "../../test/base/TestWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
@InputType()
class GradeWhereInput {
  @ApiProperty({
    required: false,
    type: () => AyalaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AyalaWhereUniqueInput)
  @IsOptional()
  @Field(() => AyalaWhereUniqueInput, {
    nullable: true,
  })
  ayalas?: AyalaWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => TestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TestWhereUniqueInput)
  @IsOptional()
  @Field(() => TestWhereUniqueInput, {
    nullable: true,
  })
  test?: TestWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  value?: IntFilter;
}
export { GradeWhereInput };
