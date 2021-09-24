import { gql } from 'apollo-server';

export default gql`
  input CreateBudgetAccountInput {
    type: BudgetAccountType!
    name: String
    initialBalance: Int
  }

  input CreateTrackingAccountInput {
    type: TrackingAccountType!
    name: String
    initialBalance: Int
  }

  input UpdateBudgetAccountInput {
    name: String
    initialBalance: Int
  }

  input UpdateTrackingAccountInput {
    name: String
    initialBalance: Int
  }
`;
