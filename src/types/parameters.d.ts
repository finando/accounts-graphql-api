import type {
  CreateBudgetAccountInput,
  CreateTrackingAccountInput,
  UpdateBudgetAccountInput,
  UpdateTrackingAccountInput
} from '.';

export interface GetAccountParams {
  id: string;
}

export interface GetBudgetAccountParams {
  id: string;
}

export interface GetTrackingAccountParams {
  id: string;
}

export interface ListAccountsParams {}

export interface CreateBudgetAccountParams {
  data: CreateBudgetAccountInput;
}

export interface CreateTrackingAccountParams {
  data: CreateTrackingAccountInput;
}

export interface UpdateBudgetAccountParams {
  id: string;
  data: UpdateBudgetAccountInput;
}

export interface UpdateTrackingAccountParams {
  id: string;
  data: UpdateTrackingAccountInput;
}

export interface DeleteAccountParams {
  id: string;
}
