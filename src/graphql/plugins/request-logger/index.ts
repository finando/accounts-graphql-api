import { type ApolloServerPlugin } from '@apollo/server';

import { type Context } from '@app/types';
import logger, { requestTags } from '@app/utils/logging';

const plugin: ApolloServerPlugin<Context> = {
  requestDidStart: async ({ queryHash, contextValue: { requestId } }) => {
    logger.debug('Request start', {
      tags: [...requestTags, 'start'],
      requestId,
      queryHash,
    });

    return {
      willSendResponse: async ({ response: { http }, errors }) => {
        http?.headers.set('request-id', requestId);

        logger.debug('Request end', {
          tags: [...requestTags, 'end'],
          requestId,
          queryHash,
          errors: !!errors,
        });
      },
    };
  },
};

export default plugin;
