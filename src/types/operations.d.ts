import type {
  Resolver,
  GetAccountParams,
  ListAccountsParams,
  CreateAccountParams,
  UpdateAccountParams,
  DeleteAccountParams,
  Account
} from '.';
import type { Operation as OperationType } from './enums';

export interface AccountOperations {
  [OperationType.QUERY]: {
    getAccount: Resolver<GetAccountParams, Account | null>;
    listAccounts: Resolver<ListAccountsParams, Account[]>;
  };
  [OperationType.MUTATION]: {
    createAccount: Resolver<CreateAccountParams, Account>;
    updateAccount: Resolver<UpdateAccountParams, Account>;
    deleteAccount: Resolver<DeleteAccountParams, Account>;
  };
}
