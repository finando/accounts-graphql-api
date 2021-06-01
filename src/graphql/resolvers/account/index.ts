import AccountService from '../../../services/account';

import type { AccountOperations, RequestOptions } from '../../../types';
import { Operation } from '../../../types/enums';

export const queries: AccountOperations[Operation.QUERY] = {
  getAccount: async ({
    info: { fieldName },
    context: { requestId },
    input: { id }
  }) => {
    const options: RequestOptions = {
      requestId,
      fieldName
    };

    console.log(id, options);

    return AccountService.getAccount(id, options);
  },
  listAccounts: async ({ info: { fieldName }, context: { requestId } }) => {
    const options: RequestOptions = {
      requestId,
      fieldName
    };

    return AccountService.listAccounts(options);
  }
};

export const mutations: AccountOperations[Operation.MUTATION] = {
  createAccount: async ({ info: { fieldName }, context: { requestId } }) => {
    const options: RequestOptions = {
      requestId,
      fieldName
    };

    return AccountService.createAccount(options);
  },
  updateAccount: async ({
    info: { fieldName },
    context: { requestId },
    input: { id }
  }) => {
    const options: RequestOptions = {
      requestId,
      fieldName
    };

    return AccountService.updateAccount(id, options);
  },
  deleteAccount: async ({
    info: { fieldName },
    context: { requestId },
    input: { id }
  }) => {
    const options: RequestOptions = {
      requestId,
      fieldName
    };

    return AccountService.deleteAccount(id, options);
  }
};
