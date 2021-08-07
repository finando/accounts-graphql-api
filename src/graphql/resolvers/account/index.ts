import type { AccountResolvers } from '@app/types';
import { Operation, BudgetAccountType, TrackingAccountType } from '@app/enums';

export const queries: AccountResolvers[Operation.QUERY] = {
  getAccount: async ({ context: { userId, accountService }, input: { id } }) =>
    accountService.getAccount(id, userId),
  getBudgetAccount: async ({
    context: { userId, accountService },
    input: { id }
  }) => accountService.getBudgetAccount(id, userId),
  getTrackingAccount: async ({
    context: { userId, accountService },
    input: { id }
  }) => accountService.getTrackingAccount(id, userId),
  listAccounts: async ({ context: { userId, accountService } }) =>
    accountService.listAccounts(userId)
};

export const mutations: AccountResolvers[Operation.MUTATION] = {
  createBudgetAccount: async ({
    context: { userId, accountService },
    input: { data }
  }) => accountService.createBudgetAccount(userId, data),
  createTrackingAccount: async ({
    context: { userId, accountService },
    input: { data }
  }) => accountService.createTrackingAccount(userId, data),
  updateBudgetAccount: async ({
    context: { userId, accountService },
    input: { id, data }
  }) => accountService.updateBudgetAccount(id, userId, data),
  updateTrackingAccount: async ({
    context: { userId, accountService },
    input: { id, data }
  }) => accountService.updateTrackingAccount(id, userId, data),
  deleteBudgetAccount: async ({
    context: { userId, accountService },
    input: { id }
  }) => accountService.deleteBudgetAccount(id, userId),
  deleteTrackingAccount: async ({
    context: { userId, accountService },
    input: { id }
  }) => accountService.deleteTrackingAccount(id, userId)
};

export const lookups: AccountResolvers[Operation.LOOKUP] = {
  __resolveType: async ({ root: { type } }) => {
    if (Object.values(BudgetAccountType).includes(type as any)) {
      return 'BudgetAccount';
    }

    if (Object.values(TrackingAccountType).includes(type as any)) {
      return 'TrackingAccount';
    }

    return null;
  }
};
