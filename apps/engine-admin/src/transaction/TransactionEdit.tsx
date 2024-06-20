import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { InstrumentTitle } from "../instrument/InstrumentTitle";
import { PortfolioTitle } from "../portfolio/PortfolioTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="instrument.id"
          reference="Instrument"
          label="Instrument"
        >
          <SelectInput optionText={InstrumentTitle} />
        </ReferenceInput>
        <NumberInput
          label="MarketValueLocalCurrency"
          source="marketValueLocalCurrency"
        />
        <NumberInput
          label="MarketValuePortfolioCurrency"
          source="marketValuePortfolioCurrency"
        />
        <ReferenceInput
          source="portfolio.id"
          reference="Portfolio"
          label="Portfolio"
        >
          <SelectInput optionText={PortfolioTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <TextInput label="TransactionId" source="transactionId" />
        <TextInput label="TransactionType" source="transactionType" />
      </SimpleForm>
    </Edit>
  );
};
