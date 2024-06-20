import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  instrumentId?: SortOrder;
  marketValueLocalCurrency?: SortOrder;
  marketValuePortfolioCurrency?: SortOrder;
  portfolioId?: SortOrder;
  quantity?: SortOrder;
  transactionId?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
