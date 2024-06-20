import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TransactionTitle } from "../transaction/TransactionTitle";

export const PortfolioCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="BenchmarkPortfolioId" source="benchmarkPortfolioId" />
        <DateTimeInput label="CreatedDate" source="createdDate" />
        <TextInput label="CurrencyId" source="currencyId" />
        <TextInput label="ModelPortfolioId" source="modelPortfolioId" />
        <TextInput label="Name" source="name" />
        <TextInput label="PortfolioId" source="portfolioId" />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
