import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type InstrumentWhereInput = {
  currencyId?: StringNullableFilter;
  exchangeId?: StringNullableFilter;
  id?: StringFilter;
  instrumentId?: StringNullableFilter;
  instrumentTypeId?: StringNullableFilter;
  name?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
