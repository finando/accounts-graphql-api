import { gql } from 'graphql-tag';

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
