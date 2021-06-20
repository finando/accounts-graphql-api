import logger, { serviceTags } from '../../utils/logging';

import prisma from '../../prisma';

import { NotFoundError, PersistenceError } from '../../graphql/errors';

import type {
  Account,
  BudgetAccount,
  TrackingAccount,
  CreateBudgetAccountInput,
  CreateTrackingAccountInput,
  UpdateBudgetAccountInput,
  UpdateTrackingAccountInput,
  RequestOptions
} from '../../types';

const tags: string[] = [...serviceTags, 'account'];

class AccountService {
  public async getAccount(
    id: string,
    userId: string,
    options?: RequestOptions
  ): Promise<Account | null> {
    try {
      const [budgetAccount, trackingAccount] = await Promise.all([
        prisma.budgetAccount.findFirst({
          where: { id, userId }
        }),
        prisma.trackingAccount.findFirst({
          where: { id, userId }
        })
      ]);

      if (!budgetAccount && !trackingAccount) {
        throw new NotFoundError(
          `Could not find account with ID: ${id} for user with ID: ${userId}`
        );
      }

      logger.info(`Found account with ID: ${id} for user with ID: ${userId}`, {
        tags: [...tags, 'success'],
        ...options
      });

      return budgetAccount ?? trackingAccount;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async getBudgetAccount(
    id: string,
    userId: string,
    options?: RequestOptions
  ): Promise<BudgetAccount | null> {
    try {
      const budgetAccount = await prisma.budgetAccount.findFirst({
        where: { id, userId }
      });

      if (!budgetAccount) {
        throw new NotFoundError(
          `Could not find budget account with ID: ${id} for user with ID: ${userId}`
        );
      }

      logger.info(
        `Found budget account with ID: ${id} for user with ID: ${userId}`,
        {
          tags: [...tags, 'success'],
          ...options
        }
      );

      return budgetAccount;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async getTrackingAccount(
    id: string,
    userId: string,
    options?: RequestOptions
  ): Promise<TrackingAccount | null> {
    try {
      const trackingAccount = await prisma.trackingAccount.findFirst({
        where: { id, userId }
      });

      if (!trackingAccount) {
        throw new NotFoundError(
          `Could not find tracking account with ID: ${id} for user with ID: ${userId}`
        );
      }

      logger.info(
        `Found tracking account with ID: ${id} for user with ID: ${userId}`,
        {
          tags: [...tags, 'success'],
          ...options
        }
      );

      return trackingAccount;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async listAccounts(
    userId: string,
    options?: RequestOptions
  ): Promise<Account[]> {
    try {
      const accounts = (
        await Promise.all([
          prisma.budgetAccount.findMany({
            where: { userId },
            orderBy: {
              createdAt: 'asc'
            }
          }),
          prisma.trackingAccount.findMany({
            where: { userId },
            orderBy: {
              createdAt: 'asc'
            }
          })
        ])
      ).flat();

      logger.info(
        `Found ${accounts.length} accounts for user with ID: ${userId}`,
        {
          tags: [...tags, 'success'],
          ...options
        }
      );

      return accounts;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async createBudgetAccount(
    userId: string,
    data: CreateBudgetAccountInput,
    options?: RequestOptions
  ): Promise<BudgetAccount> {
    try {
      const account = await prisma.budgetAccount.create({
        data: { ...data, userId }
      });

      logger.info(
        `Successfully created budget account with ID: ${account.id} for user with ID: ${userId}`,
        {
          tags: [...tags, 'success'],
          ...options
        }
      );

      return account;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async createTrackingAccount(
    userId: string,
    data: CreateTrackingAccountInput,
    options?: RequestOptions
  ): Promise<TrackingAccount> {
    try {
      const account = await prisma.trackingAccount.create({
        data: { ...data, userId }
      });

      logger.info(
        `Successfully created tracking account with ID: ${account.id} for user with ID: ${userId}`,
        {
          tags: [...tags, 'success'],
          ...options
        }
      );

      return account;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async updateBudgetAccount(
    id: string,
    userId: string,
    data: UpdateBudgetAccountInput,
    options?: RequestOptions
  ): Promise<BudgetAccount> {
    try {
      const account = await this.getBudgetAccount(id, userId, options);

      if (!account || account?.userId !== userId) {
        throw new NotFoundError(
          `Could not find budget account with ID: ${id} for user with ID: ${userId}`
        );
      }

      const updatedAccount = await prisma.budgetAccount.update({
        where: { id },
        data
      });

      logger.info(
        `Successfully updated budget account with ID: ${updatedAccount.id} for user with ID: ${userId}`,
        {
          tags: [...tags, 'success'],
          ...options
        }
      );

      return updatedAccount;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async updateTrackingAccount(
    id: string,
    userId: string,
    data: UpdateTrackingAccountInput,
    options?: RequestOptions
  ): Promise<TrackingAccount> {
    try {
      const account = await this.getTrackingAccount(id, userId, options);

      if (!account || account?.userId !== userId) {
        throw new NotFoundError(
          `Could not find tracking account with ID: ${id} for user with ID: ${userId}`
        );
      }

      const updatedAccount = await prisma.trackingAccount.update({
        where: { id },
        data
      });

      logger.info(
        `Successfully updated tracking account with ID: ${updatedAccount.id} for user with ID: ${userId}`,
        {
          tags: [...tags, 'success'],
          ...options
        }
      );

      return updatedAccount;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async deleteBudgetAccount(
    id: string,
    userId: string,
    options?: RequestOptions
  ): Promise<BudgetAccount> {
    try {
      const account = await this.getBudgetAccount(id, userId, options);

      if (!account || account?.userId !== userId) {
        throw new NotFoundError(
          `Could not find budget account with ID: ${id} for user with ID: ${userId}`
        );
      }

      const deletedAccount = await prisma.budgetAccount.delete({
        where: { id }
      });

      logger.info(
        `Successfully deleted budget account with ID: ${deletedAccount.id} for user with ID: ${userId}`,
        {
          tags: [...tags, 'success'],
          ...options
        }
      );

      return deletedAccount;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async deleteTrackingAccount(
    id: string,
    userId: string,
    options?: RequestOptions
  ): Promise<TrackingAccount> {
    try {
      const account = await this.getTrackingAccount(id, userId, options);

      if (!account || account?.userId !== userId) {
        throw new NotFoundError(
          `Could not find tracking account with ID: ${id} for user with ID: ${userId}`
        );
      }

      const deletedAccount = await prisma.trackingAccount.delete({
        where: { id }
      });

      logger.info(
        `Successfully deleted tracking account with ID: ${deletedAccount.id} for user with ID: ${userId}`,
        {
          tags: [...tags, 'success'],
          ...options
        }
      );

      return deletedAccount;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  private handleError(error: Error, options?: RequestOptions): Error {
    logger.error(error.message, {
      tags: [...tags, 'error'],
      ...options,
      error
    });

    if (error instanceof NotFoundError) {
      return error;
    } else {
      return new PersistenceError(
        'An error occurred whilst working with Account model'
      );
    }
  }
}

export default new AccountService();
