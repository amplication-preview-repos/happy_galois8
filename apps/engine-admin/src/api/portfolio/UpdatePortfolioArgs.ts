import { PortfolioWhereUniqueInput } from "./PortfolioWhereUniqueInput";
import { PortfolioUpdateInput } from "./PortfolioUpdateInput";

export type UpdatePortfolioArgs = {
  where: PortfolioWhereUniqueInput;
  data: PortfolioUpdateInput;
};
