import { type StandaloneServerContextFunctionArgument } from '@apollo/server/dist/esm/standalone';

import prisma from '@app/prisma';
import AccountService from '@app/services/account';
import { type Context } from '@app/types';
import { getRequestId } from '@app/utils/common';
import logger, { serviceTags } from '@app/utils/logging';

export default async ({
  req: { headers },
}: StandaloneServerContextFunctionArgument): Promise<Context> => {
  const requestId = getRequestId(headers);
  const userId = 'az';

  return {
    requestId,
    userId,
    accountService: new AccountService(
      prisma,
      logger.child({ tags: [...serviceTags, 'account'], requestId, userId })
    ),
  };
};
