import type { ApolloServerPlugin } from 'apollo-server-plugin-base';

import logger, { requestTags } from '../../../utils/logging';

import type { Context } from '../../../types';

const plugin: ApolloServerPlugin<Context> = {
  requestDidStart: ({
    queryHash,
    operationName: operation,
    context: { requestId }
  }) => ({
    didEncounterErrors: ({ errors }) =>
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
