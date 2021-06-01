import type { CreateAccountInput, UpdateAccountInput } from '.';

export interface GetAccountParams {
  id: string;
}

export interface ListAccountsParams {}

export interface CreateAccountParams {
  data: CreateAccountInput;
}

export interface UpdateAccountParams {
  id: string;
  data: UpdateAccountInput;
}

export interface DeleteAccountParams {
  id: string;
}
