import { v4 as uuid } from 'uuid';

import prisma from '@app/prisma';
import logger, { serviceTags } from '@app/utils/logging';
import { Context } from '@app/types';

import AccountService from '@app/services/account';

export default async ({ req }): Promise<Context> => {
  const requestId = req.headers['request-id'] || uuid();
  const userId = 'az';

  return {
    requestId,
    userId,
    accountService: new AccountService(
      prisma,
      logger.child({ tags: [...serviceTags, 'account'], requestId, userId })
    )
  };
};
