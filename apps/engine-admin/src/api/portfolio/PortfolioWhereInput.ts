import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type PortfolioWhereInput = {
  benchmarkPortfolioId?: StringNullableFilter;
  createdDate?: DateTimeNullableFilter;
  currencyId?: StringNullableFilter;
  id?: StringFilter;
  modelPortfolioId?: StringNullableFilter;
  name?: StringNullableFilter;
  portfolioId?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
