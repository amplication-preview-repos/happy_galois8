import { TransactionUpdateManyWithoutPortfoliosInput } from "./TransactionUpdateManyWithoutPortfoliosInput";

export type PortfolioUpdateInput = {
  benchmarkPortfolioId?: string | null;
  createdDate?: Date | null;
  currencyId?: string | null;
  modelPortfolioId?: string | null;
  name?: string | null;
  portfolioId?: string | null;
  transactions?: TransactionUpdateManyWithoutPortfoliosInput;
};
