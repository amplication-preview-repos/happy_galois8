import { TransactionUpdateManyWithoutInstrumentsInput } from "./TransactionUpdateManyWithoutInstrumentsInput";

export type InstrumentUpdateInput = {
  currencyId?: string | null;
  exchangeId?: string | null;
  instrumentId?: string | null;
  instrumentTypeId?: string | null;
  name?: string | null;
  transactions?: TransactionUpdateManyWithoutInstrumentsInput;
};
