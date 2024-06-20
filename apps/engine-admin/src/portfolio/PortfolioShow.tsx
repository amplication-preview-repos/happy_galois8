import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INSTRUMENT_TITLE_FIELD } from "../instrument/InstrumentTitle";
import { PORTFOLIO_TITLE_FIELD } from "./PortfolioTitle";

export const PortfolioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BenchmarkPortfolioId" source="benchmarkPortfolioId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CreatedDate" source="createdDate" />
        <TextField label="CurrencyId" source="currencyId" />
        <TextField label="ID" source="id" />
        <TextField label="ModelPortfolioId" source="modelPortfolioId" />
        <TextField label="Name" source="name" />
        <TextField label="PortfolioId" source="portfolioId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Transaction"
          target="portfolioId"
          label="Transactions"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
