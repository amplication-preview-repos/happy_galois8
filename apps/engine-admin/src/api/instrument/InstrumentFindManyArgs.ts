import { InstrumentWhereInput } from "./InstrumentWhereInput";
import { InstrumentOrderByInput } from "./InstrumentOrderByInput";

export type InstrumentFindManyArgs = {
  where?: InstrumentWhereInput;
  orderBy?: Array<InstrumentOrderByInput>;
  skip?: number;
  take?: number;
};
