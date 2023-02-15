import { type Operation } from '@app/enums';

import {
  type Resolver,
  type GetAccountParams,
  type GetBudgetAccountParams,
  type GetTrackingAccountParams,
  type ListAccountsParams,
  type UpdateBudgetAccountParams,
  type UpdateTrackingAccountParams,
  type DeleteBudgetAccountParams,
  type DeleteTrackingAccountParams,
  type Account,
  type BudgetAccount,
  type TrackingAccount,
} from '.';

export interface AccountResolvers {
  [Operation.QUERY]: {
    getAccount: Resolver<GetAccountParams, Account | null>;
    getBudgetAccount: Resolver<GetBudgetAccountParams, BudgetAccount | null>;
    getTrackingAccount: Resolver<
      GetTrackingAccountParams,
      TrackingAccount | null
    >;
    listAccounts: Resolver<ListAccountsParams, Account[]>;
  };
  [Operation.MUTATION]: {
    createBudgetAccount: Resolver<CreateBudgetAccountParams, BudgetAccount>;
    createTrackingAccount: Resolver<
      CreateTrackingAccountParams,
      TrackingAccount
    >;
    updateBudgetAccount: Resolver<
      UpdateBudgetAccountParams,
      BudgetAccount | null
    >;
    updateTrackingAccount: Resolver<
      UpdateTrackingAccountParams,
      TrackingAccount | null
    >;
    deleteBudgetAccount: Resolver<
      DeleteBudgetAccountParams,
      BudgetAccount | null
    >;
    deleteTrackingAccount: Resolver<
      DeleteTrackingAccountParams,
      TrackingAccount | null
    >;
  };
  [Operation.LOOKUP]: {
    __resolveType: Resolver<unknown, string | null, Account>;
  };
}

export type Resolvers = AccountResolvers;
