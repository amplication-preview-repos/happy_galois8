import { StringFilter } from "../../util/StringFilter";
import { InstrumentWhereUniqueInput } from "../instrument/InstrumentWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TransactionWhereInput = {
  id?: StringFilter;
  instrument?: InstrumentWhereUniqueInput;
  marketValueLocalCurrency?: FloatNullableFilter;
  marketValuePortfolioCurrency?: FloatNullableFilter;
  portfolio?: PortfolioWhereUniqueInput;
  quantity?: IntNullableFilter;
  transactionId?: StringNullableFilter;
  transactionType?: StringNullableFilter;
};
