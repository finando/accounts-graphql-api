import { Account as AccountDBO } from '@prisma/client';

export interface Account extends AccountDBO {}

export interface CreateAccountInput {}

export interface UpdateAccountInput {}

export type { Account as AccountDBO } from '@prisma/client';
