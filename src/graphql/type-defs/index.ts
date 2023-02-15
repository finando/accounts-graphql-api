import { gql } from 'graphql-tag';

import enums from './enums';
import inputs from './inputs';
import scalars from './scalars';
import types from './types';

export default gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )

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
