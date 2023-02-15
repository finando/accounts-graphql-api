import { type ApolloServerPlugin } from '@apollo/server';

import { type Context } from '@app/types';
import logger, { requestTags } from '@app/utils/logging';

const plugin: ApolloServerPlugin<Context> = {
  requestDidStart: async ({
    queryHash,
    operationName: operation,
    contextValue: { requestId },
  }) => ({
    didEncounterErrors: async ({ errors }) =>
      errors.forEach((error) => {
        logger.error(error.message, {
          tags: [...requestTags, 'error'],
          requestId,
          operation,
          queryHash,
          error,
        });
      }),
  }),
};

export default plugin;
