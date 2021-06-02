import { Account as AccountDBO } from '@prisma/client';

export interface Account extends AccountDBO {}

export interface CreateAccountInput {
  name?: string;
}

export interface UpdateAccountInput {
  name?: string;
}

export type { Account as AccountDBO } from '@prisma/client';
