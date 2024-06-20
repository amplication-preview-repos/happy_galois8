import { Portfolio as TPortfolio } from "../api/portfolio/Portfolio";

export const PORTFOLIO_TITLE_FIELD = "name";

export const PortfolioTitle = (record: TPortfolio): string => {
  return record.name?.toString() || String(record.id);
};
