/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InstrumentWhereUniqueInput } from "../../instrument/base/InstrumentWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  IsInt,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { PortfolioWhereUniqueInput } from "../../portfolio/base/PortfolioWhereUniqueInput";

@InputType()
class TransactionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => InstrumentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InstrumentWhereUniqueInput)
  @IsOptional()
  @Field(() => InstrumentWhereUniqueInput, {
    nullable: true,
  })
  instrument?: InstrumentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  marketValueLocalCurrency?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  marketValuePortfolioCurrency?: number | null;

  @ApiProperty({
    required: false,
    type: () => PortfolioWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PortfolioWhereUniqueInput)
  @IsOptional()
  @Field(() => PortfolioWhereUniqueInput, {
    nullable: true,
  })
  portfolio?: PortfolioWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transactionId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transactionType?: string | null;
}

export { TransactionUpdateInput as TransactionUpdateInput };
