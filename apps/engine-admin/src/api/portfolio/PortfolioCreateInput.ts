import { TransactionCreateNestedManyWithoutPortfoliosInput } from "./TransactionCreateNestedManyWithoutPortfoliosInput";

export type PortfolioCreateInput = {
  benchmarkPortfolioId?: string | null;
  createdDate?: Date | null;
  currencyId?: string | null;
  modelPortfolioId?: string | null;
  name?: string | null;
  portfolioId?: string | null;
  transactions?: TransactionCreateNestedManyWithoutPortfoliosInput;
};
