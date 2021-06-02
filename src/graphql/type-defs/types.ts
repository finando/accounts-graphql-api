import { gql } from 'apollo-server';

export default gql`
  type Account @key(fields: "id") {
    id: ID!
    name: String
    balance: Float!
    currency: Currency!
  }
`;
