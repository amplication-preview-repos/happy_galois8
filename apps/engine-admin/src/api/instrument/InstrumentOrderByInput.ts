import { SortOrder } from "../../util/SortOrder";

export type InstrumentOrderByInput = {
  createdAt?: SortOrder;
  currencyId?: SortOrder;
  exchangeId?: SortOrder;
  id?: SortOrder;
  instrumentId?: SortOrder;
  instrumentTypeId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
