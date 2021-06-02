import { gql } from 'apollo-server';

import enums from './enums';
import types from './types';
import inputs from './inputs';

export default gql`
  ${enums}
  ${types}
  ${inputs}

  extend type Query {
    getAccount(id: ID!): Account

    listAccounts: [Account!]!
  }

  extend type Mutation {
    createAccount(data: CreateAccountInput!): Account!

    updateAccount(id: ID!, data: UpdateAccountInput!): Account

    deleteAccount(id: ID!): Account
  }
`;
