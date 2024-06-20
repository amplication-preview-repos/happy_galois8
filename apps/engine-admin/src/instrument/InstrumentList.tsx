import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InstrumentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Instruments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="CurrencyId" source="currencyId" />
        <TextField label="ExchangeId" source="exchangeId" />
        <TextField label="ID" source="id" />
        <TextField label="InstrumentId" source="instrumentId" />
        <TextField label="InstrumentTypeId" source="instrumentTypeId" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
