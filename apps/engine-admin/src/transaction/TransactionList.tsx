import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INSTRUMENT_TITLE_FIELD } from "../instrument/InstrumentTitle";
import { PORTFOLIO_TITLE_FIELD } from "../portfolio/PortfolioTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Instrument"
          source="instrument.id"
          reference="Instrument"
        >
          <TextField source={INSTRUMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="MarketValueLocalCurrency"
          source="marketValueLocalCurrency"
        />
        <TextField
          label="MarketValuePortfolioCurrency"
          source="marketValuePortfolioCurrency"
        />
        <ReferenceField
          label="Portfolio"
          source="portfolio.id"
          reference="Portfolio"
        >
          <TextField source={PORTFOLIO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <TextField label="TransactionId" source="transactionId" />
        <TextField label="TransactionType" source="transactionType" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
