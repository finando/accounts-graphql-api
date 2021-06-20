import AccountService from '../../../services/account';

import type { AccountResolvers, RequestOptions } from '../../../types';
import {
  Operation,
  BudgetAccountType,
  TrackingAccountType
} from '../../../types/enums';

export const queries: AccountResolvers[Operation.QUERY] = {
  getAccount: async ({
    info: { fieldName },
    context: { requestId },
    input: { id }
  }) => {
    const userId = 'az';
    const options: RequestOptions = {
      requestId,
      fieldName,
      userId
    };

    return AccountService.getAccount(id, userId, options);
  },
  getBudgetAccount: async ({
    info: { fieldName },
    context: { requestId },
    input: { id }
  }) => {
    const userId = 'az';
    const options: RequestOptions = {
      requestId,
      fieldName,
      userId
    };

    return AccountService.getBudgetAccount(id, userId, options);
  },
  getTrackingAccount: async ({
    info: { fieldName },
    context: { requestId },
    input: { id }
  }) => {
    const userId = 'az';
    const options: RequestOptions = {
      requestId,
      fieldName,
      userId
    };

    return AccountService.getTrackingAccount(id, userId, options);
  },
  listAccounts: async ({ info: { fieldName }, context: { requestId } }) => {
    const userId = 'az';
    const options: RequestOptions = {
      requestId,
      fieldName,
      userId
    };

    return AccountService.listAccounts(userId, options);
  }
};

export const mutations: AccountResolvers[Operation.MUTATION] = {
  createBudgetAccount: async ({
    info: { fieldName },
    context: { requestId },
    input: { data }
  }) => {
    const userId = 'az';
    const options: RequestOptions = {
      requestId,
      fieldName,
      userId
    };

    return AccountService.createBudgetAccount(userId, data, options);
  },
  createTrackingAccount: async ({
    info: { fieldName },
    context: { requestId },
    input: { data }
  }) => {
    const userId = 'az';
    const options: RequestOptions = {
      requestId,
      fieldName,
      userId
    };

    return AccountService.createTrackingAccount(userId, data, options);
  },
  updateBudgetAccount: async ({
    info: { fieldName },
    context: { requestId },
    input: { id, data }
  }) => {
    const userId = 'az';
    const options: RequestOptions = {
      requestId,
      fieldName,
      userId
    };

    return AccountService.updateBudgetAccount(id, userId, data, options);
  },
  updateTrackingAccount: async ({
    info: { fieldName },
    context: { requestId },
    input: { id, data }
  }) => {
    const userId = 'az';
    const options: RequestOptions = {
      requestId,
      fieldName,
      userId
    };

    return AccountService.updateTrackingAccount(id, userId, data, options);
  },
  deleteBudgetAccount: async ({
    info: { fieldName },
    context: { requestId },
    input: { id }
  }) => {
    const userId = 'az';
    const options: RequestOptions = {
      requestId,
      fieldName,
      userId
    };

    return AccountService.deleteBudgetAccount(id, userId, options);
  },
  deleteTrackingAccount: async ({
    info: { fieldName },
    context: { requestId },
    input: { id }
  }) => {
    const userId = 'az';
    const options: RequestOptions = {
      requestId,
      fieldName,
      userId
    };

    return AccountService.deleteTrackingAccount(id, userId, options);
  }
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
