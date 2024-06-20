import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "transactionId";

export const TransactionTitle = (record: TTransaction): string => {
  return record.transactionId?.toString() || String(record.id);
};
