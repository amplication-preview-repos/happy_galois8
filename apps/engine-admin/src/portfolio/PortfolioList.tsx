import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PortfolioList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Portfolios"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="BenchmarkPortfolioId" source="benchmarkPortfolioId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CreatedDate" source="createdDate" />
        <TextField label="CurrencyId" source="currencyId" />
        <TextField label="ID" source="id" />
        <TextField label="ModelPortfolioId" source="modelPortfolioId" />
        <TextField label="Name" source="name" />
        <TextField label="PortfolioId" source="portfolioId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
