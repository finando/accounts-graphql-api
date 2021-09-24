import type {
  BudgetAccount as BudgetAccountDBO,
  TrackingAccount as TrackingAccountDBO,
  BudgetAccountType,
  TrackingAccountType
} from '@prisma/client';

export interface BudgetAccount extends BudgetAccountDBO {}

export interface TrackingAccount extends TrackingAccountDBO {}

export type Account = BudgetAccount | TrackingAccount;

export interface CreateBudgetAccountInput {
  type: BudgetAccountType;
  name?: string;
}

export interface CreateTrackingAccountInput {
  type: TrackingAccountType;
  name?: string;
}

export interface UpdateBudgetAccountInput {
  name?: string;
  initialBalance?: number;
}

export interface UpdateTrackingAccountInput {
  name?: string;
  initialBalance?: number;
}

export type {
  BudgetAccount as BudgetAccountDBO,
  TrackingAccount as TrackingAccountDBO
} from '@prisma/client';
