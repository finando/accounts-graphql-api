import logger, { serviceTags } from '../../utils/logging';

import prisma from '../../prisma';

import { NotFoundError, PersistenceError } from '../../graphql/errors';

import type {
  Account,
  CreateAccountInput,
  UpdateAccountInput,
  RequestOptions
} from '../../types';

const tags: string[] = [...serviceTags, 'account'];

class AccountService {
  public async getAccount(
    id: string,
    options?: RequestOptions
  ): Promise<Account | null> {
    try {
      const account = await prisma.account.findFirst({
        where: { id }
      });

      if (!account) {
        throw new NotFoundError(`Could not find account with ID: ${id}`);
      }

      logger.info(`Found account with ID: ${id}`, {
        tags: [...tags, 'success'],
        ...options
      });

      return account;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async listAccounts(options?: RequestOptions): Promise<Account[]> {
    try {
      const accounts = await prisma.account.findMany({
        orderBy: {
          createdAt: 'asc'
        }
      });

      logger.info(`Found ${accounts.length} accounts`, {
        tags: [...tags, 'success'],
        ...options
      });

      return accounts;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async createAccount(
    data: CreateAccountInput,
    options?: RequestOptions
  ): Promise<Account> {
    try {
      const account = await prisma.account.create({ data });

      logger.info(`Successfully created account with ID: ${account.id}`, {
        tags: [...tags, 'success'],
        ...options
      });

      return account;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async updateAccount(
    id: string,
    data: UpdateAccountInput,
    options?: RequestOptions
  ): Promise<Account> {
    try {
      const account = await prisma.account.update({ where: { id }, data });

      logger.info(`Successfully updated account with ID: ${account.id}`, {
        tags: [...tags, 'success'],
        ...options
      });

      return account;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async deleteAccount(
    id: string,
    options?: RequestOptions
  ): Promise<Account> {
    try {
      const account = await prisma.account.delete({ where: { id } });

      logger.info(`Successfully deleted account with ID: ${account.id}`, {
        tags: [...tags, 'success'],
        ...options
      });

      return account;
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
