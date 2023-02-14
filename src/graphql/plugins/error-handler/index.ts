import type { ApolloServerPlugin } from '@apollo/server';

import logger, { requestTags } from '@app/utils/logging';
import type { Context } from '@app/types';

const plugin: ApolloServerPlugin<Context> = {
  requestDidStart: async ({
    queryHash,
    operationName: operation,
    contextValue: { requestId }
  }) => ({
    didEncounterErrors: async ({ errors }) =>
      errors.forEach(error => {
        logger.error(error.message, {
          tags: [...requestTags, 'error'],
          requestId,
          operation,
          queryHash,
          error
        });
      })
  })
};

export default plugin;
