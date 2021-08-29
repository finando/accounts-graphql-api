import { gql } from 'apollo-server';

export default gql`
  input CreateBudgetAccountInput {
    type: BudgetAccountType!
    name: String
  }

  input CreateTrackingAccountInput {
    type: TrackingAccountType!
    name: String
  }

  input UpdateBudgetAccountInput {
    name: String
    balance: Int
  }

  input UpdateTrackingAccountInput {
    name: String
    balance: Int
  }
`;
