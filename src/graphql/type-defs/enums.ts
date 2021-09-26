import { gql } from 'apollo-server';

export default gql`
  enum BudgetAccountType {
    CHECKING
    SAVINGS
    CASH
    CREDIT_CARD
    LINE_OF_CREDIT
  }

  enum TrackingAccountType {
    ASSET
    LIABILITY
  }
`;
