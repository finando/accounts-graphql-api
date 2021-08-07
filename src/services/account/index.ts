import { Service } from '@app/utils/service';
import type {
  Account,
  BudgetAccount,
  TrackingAccount,
  CreateBudgetAccountInput,
  CreateTrackingAccountInput,
  UpdateBudgetAccountInput,
  UpdateTrackingAccountInput
} from '@app/types';

import { NotFoundError } from '../../graphql/errors';

class AccountService extends Service {
  public async getAccount(id: string, userId: string): Promise<Account | null> {
    try {
      const [budgetAccount, trackingAccount] = await Promise.all([
        this.prisma.budgetAccount.findFirst({
          where: { id, userId }
        }),
        this.prisma.trackingAccount.findFirst({
          where: { id, userId }
        })
      ]);

      if (!budgetAccount && !trackingAccount) {
        throw new NotFoundError(
          `Could not find account with ID: ${id} for user with ID: ${userId}`
        );
      }

      this.logger.info(
        `Found account with ID: ${id} for user with ID: ${userId}`
      );

      return budgetAccount ?? trackingAccount;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getBudgetAccount(
    id: string,
    userId: string
  ): Promise<BudgetAccount | null> {
    try {
      const budgetAccount = await this.prisma.budgetAccount.findFirst({
        where: { id, userId }
      });

      if (!budgetAccount) {
        throw new NotFoundError(
          `Could not find budget account with ID: ${id} for user with ID: ${userId}`
        );
      }

      this.logger.info(
        `Found budget account with ID: ${id} for user with ID: ${userId}`
      );

      return budgetAccount;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getTrackingAccount(
    id: string,
    userId: string
  ): Promise<TrackingAccount | null> {
    try {
      const trackingAccount = await this.prisma.trackingAccount.findFirst({
        where: { id, userId }
      });

      if (!trackingAccount) {
        throw new NotFoundError(
          `Could not find tracking account with ID: ${id} for user with ID: ${userId}`
        );
      }

      this.logger.info(
        `Found tracking account with ID: ${id} for user with ID: ${userId}`
      );

      return trackingAccount;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async listAccounts(userId: string): Promise<Account[]> {
    try {
      const accounts = (
        await Promise.all([
          this.prisma.budgetAccount.findMany({
            where: { userId },
            orderBy: {
              createdAt: 'asc'
            }
          }),
          this.prisma.trackingAccount.findMany({
            where: { userId },
            orderBy: {
              createdAt: 'asc'
            }
          })
        ])
      )
        .flat()
        .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

      this.logger.info(
        `Found ${accounts.length} accounts for user with ID: ${userId}`
      );

      return accounts;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async createBudgetAccount(
    userId: string,
    data: CreateBudgetAccountInput
  ): Promise<BudgetAccount> {
    try {
      const account = await this.prisma.budgetAccount.create({
        data: { ...data, userId }
      });

      this.logger.info(
        `Successfully created budget account with ID: ${account.id} for user with ID: ${userId}`
      );

      return account;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async createTrackingAccount(
    userId: string,
    data: CreateTrackingAccountInput
  ): Promise<TrackingAccount> {
    try {
      const account = await this.prisma.trackingAccount.create({
        data: { ...data, userId }
      });

      this.logger.info(
        `Successfully created tracking account with ID: ${account.id} for user with ID: ${userId}`
      );

      return account;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async updateBudgetAccount(
    id: string,
    userId: string,
    data: UpdateBudgetAccountInput
  ): Promise<BudgetAccount> {
    try {
      const account = await this.getBudgetAccount(id, userId);

      if (!account || account?.userId !== userId) {
        throw new NotFoundError(
          `Could not find budget account with ID: ${id} for user with ID: ${userId}`
        );
      }

      const updatedAccount = await this.prisma.budgetAccount.update({
        where: { id },
        data
      });

      this.logger.info(
        `Successfully updated budget account with ID: ${updatedAccount.id} for user with ID: ${userId}`
      );

      return updatedAccount;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async updateTrackingAccount(
    id: string,
    userId: string,
    data: UpdateTrackingAccountInput
  ): Promise<TrackingAccount> {
    try {
      const account = await this.getTrackingAccount(id, userId);

      if (!account || account?.userId !== userId) {
        throw new NotFoundError(
          `Could not find tracking account with ID: ${id} for user with ID: ${userId}`
        );
      }

      const updatedAccount = await this.prisma.trackingAccount.update({
        where: { id },
        data
      });

      this.logger.info(
        `Successfully updated tracking account with ID: ${updatedAccount.id} for user with ID: ${userId}`
      );

      return updatedAccount;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async deleteBudgetAccount(
    id: string,
    userId: string
  ): Promise<BudgetAccount> {
    try {
      const account = await this.getBudgetAccount(id, userId);

      if (!account || account?.userId !== userId) {
        throw new NotFoundError(
          `Could not find budget account with ID: ${id} for user with ID: ${userId}`
        );
      }

      const deletedAccount = await this.prisma.budgetAccount.delete({
        where: { id }
      });

      this.logger.info(
        `Successfully deleted budget account with ID: ${deletedAccount.id} for user with ID: ${userId}`
      );

      return deletedAccount;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async deleteTrackingAccount(
    id: string,
    userId: string
  ): Promise<TrackingAccount> {
    try {
      const account = await this.getTrackingAccount(id, userId);

      if (!account || account?.userId !== userId) {
        throw new NotFoundError(
          `Could not find tracking account with ID: ${id} for user with ID: ${userId}`
        );
      }

      const deletedAccount = await this.prisma.trackingAccount.delete({
        where: { id }
      });

      this.logger.info(
        `Successfully deleted tracking account with ID: ${deletedAccount.id} for user with ID: ${userId}`
      );

      return deletedAccount;
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

export default AccountService;
