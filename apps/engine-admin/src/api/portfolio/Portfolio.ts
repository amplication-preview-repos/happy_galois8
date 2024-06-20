import { Transaction } from "../transaction/Transaction";

export type Portfolio = {
  benchmarkPortfolioId: string | null;
  createdAt: Date;
  createdDate: Date | null;
  currencyId: string | null;
  id: string;
  modelPortfolioId: string | null;
  name: string | null;
  portfolioId: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
