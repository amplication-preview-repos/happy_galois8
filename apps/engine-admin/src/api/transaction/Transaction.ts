import { Instrument } from "../instrument/Instrument";
import { Portfolio } from "../portfolio/Portfolio";

export type Transaction = {
  createdAt: Date;
  id: string;
  instrument?: Instrument | null;
  marketValueLocalCurrency: number | null;
  marketValuePortfolioCurrency: number | null;
  portfolio?: Portfolio | null;
  quantity: number | null;
  transactionId: string | null;
  transactionType: string | null;
  updatedAt: Date;
};
