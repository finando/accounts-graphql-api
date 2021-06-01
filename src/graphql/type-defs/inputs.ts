import { gql } from 'apollo-server';

export default gql`
  input CreateAccountInput {
    name: String
  }

  input UpdateAccountInput {
    name: String
  }
`;
