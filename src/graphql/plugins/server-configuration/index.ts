import type { ApolloServerPlugin } from 'apollo-server-plugin-base';

import env from '../../../env';

import logger, { serverConfigTags } from '../../../utils/logging';

import type { Context } from '../../../types';

const {
  NODE_ENV: environment,
  INTROSPECTION: introspection,
  PLAYGROUND: playground
} = env;

const plugin: ApolloServerPlugin<Context> = {
  serverWillStart: () => {
    logger.info(
      `Introspection query is ${
        introspection ? 'enabled' : 'disabled'
      } in ${environment} mode`,
      {
        tags: [...serverConfigTags, 'introspection']
      }
    );
    logger.info(
      `GraphQL Playground is ${
        playground ? 'enabled' : 'disabled'
      } in ${environment} mode`,
      {
        tags: [...serverConfigTags, 'playground']
      }
    );
  }
};

export default plugin;
