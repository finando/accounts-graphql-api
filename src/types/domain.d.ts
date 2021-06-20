import type {
  BudgetAccount as BudgetAccountDBO,
  TrackingAccount as TrackingAccountDBO
} from '@prisma/client';

import type { BudgetAccountType, TrackingAccountType } from '@app/enums';

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
}

export interface UpdateTrackingAccountInput {
  name?: string;
}

export type {
  BudgetAccount as BudgetAccountDBO,
  TrackingAccount as TrackingAccountDBO
} from '@prisma/client';
