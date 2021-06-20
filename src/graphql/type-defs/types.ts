import { gql } from 'apollo-server';

export default gql`
  type BudgetAccount @key(fields: "id") {
    id: ID!
    type: BudgetAccountType!
    name: String
    balance: Float!
    currency: Currency!
  }

  type TrackingAccount @key(fields: "id") {
    id: ID!
    type: TrackingAccountType!
    name: String
    balance: Float!
    currency: Currency!
  }

  union Account = BudgetAccount | TrackingAccount
`;
