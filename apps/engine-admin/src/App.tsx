import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InstrumentList } from "./instrument/InstrumentList";
import { InstrumentCreate } from "./instrument/InstrumentCreate";
import { InstrumentEdit } from "./instrument/InstrumentEdit";
import { InstrumentShow } from "./instrument/InstrumentShow";
import { PortfolioList } from "./portfolio/PortfolioList";
import { PortfolioCreate } from "./portfolio/PortfolioCreate";
import { PortfolioEdit } from "./portfolio/PortfolioEdit";
import { PortfolioShow } from "./portfolio/PortfolioShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Engine"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Instrument"
          list={InstrumentList}
          edit={InstrumentEdit}
          create={InstrumentCreate}
          show={InstrumentShow}
        />
        <Resource
          name="Portfolio"
          list={PortfolioList}
          edit={PortfolioEdit}
          create={PortfolioCreate}
          show={PortfolioShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
