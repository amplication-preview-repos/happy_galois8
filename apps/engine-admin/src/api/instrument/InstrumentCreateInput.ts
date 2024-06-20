import { TransactionCreateNestedManyWithoutInstrumentsInput } from "./TransactionCreateNestedManyWithoutInstrumentsInput";

export type InstrumentCreateInput = {
  currencyId?: string | null;
  exchangeId?: string | null;
  instrumentId?: string | null;
  instrumentTypeId?: string | null;
  name?: string | null;
  transactions?: TransactionCreateNestedManyWithoutInstrumentsInput;
};
