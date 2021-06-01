import type { ApolloServerPlugin } from 'apollo-server-plugin-base';

import logger, { requestTags } from '../../../utils/logging';

import type { Context } from '../../../types';

const plugin: ApolloServerPlugin<Context> = {
  requestDidStart: ({ queryHash, context: { requestId } }) => {
    logger.info('Request start', {
      tags: [...requestTags, 'start'],
      requestId,
      queryHash
    });

    return {
      willSendResponse: ({ response: { http }, errors }) => {
        http?.headers.set('request-id', requestId);

        logger.info('Request end', {
          tags: [...requestTags, 'end'],
          requestId,
          queryHash,
          errors: !!errors
        });
      }
    };
  }
};

export default plugin;
