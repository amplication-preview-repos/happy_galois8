import { Instrument as TInstrument } from "../api/instrument/Instrument";

export const INSTRUMENT_TITLE_FIELD = "name";

export const InstrumentTitle = (record: TInstrument): string => {
  return record.name?.toString() || String(record.id);
};
