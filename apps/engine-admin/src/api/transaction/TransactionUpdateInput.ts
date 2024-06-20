import { InstrumentWhereUniqueInput } from "../instrument/InstrumentWhereUniqueInput";
import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type TransactionUpdateInput = {
  instrument?: InstrumentWhereUniqueInput | null;
  marketValueLocalCurrency?: number | null;
  marketValuePortfolioCurrency?: number | null;
  portfolio?: PortfolioWhereUniqueInput | null;
  quantity?: number | null;
  transactionId?: string | null;
  transactionType?: string | null;
};
