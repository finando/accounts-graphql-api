import { gql } from 'apollo-server';

import scalars from './scalars';
import enums from './enums';
import types from './types';
import inputs from './inputs';

export default gql`
  ${scalars}
  ${enums}
  ${types}
  ${inputs}

  extend type Query {
    getAccount(id: ID!): Account

    getBudgetAccount(id: ID!): BudgetAccount

    getTrackingAccount(id: ID!): TrackingAccount

    listAccounts: [Account!]!
  }

  extend type Mutation {
    createBudgetAccount(data: CreateBudgetAccountInput!): BudgetAccount!

    createTrackingAccount(data: CreateTrackingAccountInput!): TrackingAccount!

    updateBudgetAccount(id: ID!, data: UpdateBudgetAccountInput!): BudgetAccount

    updateTrackingAccount(
      id: ID!
      data: UpdateTrackingAccountInput!
    ): TrackingAccount

    deleteBudgetAccount(id: ID!): BudgetAccount

    deleteTrackingAccount(id: ID!): TrackingAccount
  }
`;
