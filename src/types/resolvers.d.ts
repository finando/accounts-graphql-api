import type { Operation as OperationType } from '@app/enums';

import type {
  Resolver,
  GetAccountParams,
  GetBudgetAccountParams,
  GetTrackingAccountParams,
  ListAccountsParams,
  UpdateBudgetAccountParams,
  UpdateTrackingAccountParams,
  DeleteBudgetAccountParams,
  DeleteTrackingAccountParams,
  Account,
  BudgetAccount,
  TrackingAccount
} from '.';

export interface AccountResolvers {
  [OperationType.QUERY]: {
    getAccount: Resolver<GetAccountParams, Account | null>;
    getBudgetAccount: Resolver<GetBudgetAccountParams, BudgetAccount | null>;
    getTrackingAccount: Resolver<
      GetTrackingAccountParams,
      TrackingAccount | null
    >;
    listAccounts: Resolver<ListAccountsParams, Account[]>;
  };
  [OperationType.MUTATION]: {
    createBudgetAccount: Resolver<CreateBudgetAccountParams, BudgetAccount>;
    createTrackingAccount: Resolver<
      CreateTrackingAccountParams,
      TrackingAccount
    >;
    updateBudgetAccount: Resolver<UpdateBudgetAccountParams, BudgetAccount>;
    updateTrackingAccount: Resolver<
      UpdateTrackingAccountParams,
      TrackingAccount
    >;
    deleteBudgetAccount: Resolver<DeleteBudgetAccountParams, BudgetAccount>;
    deleteTrackingAccount: Resolver<
      DeleteTrackingAccountParams,
      TrackingAccount
    >;
  };
  [OperationType.LOOKUP]: {
    __resolveType: Resolver<any, string | null, Account>;
  };
}
