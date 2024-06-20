import { Transaction } from "../transaction/Transaction";

export type Instrument = {
  createdAt: Date;
  currencyId: string | null;
  exchangeId: string | null;
  id: string;
  instrumentId: string | null;
  instrumentTypeId: string | null;
  name: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
