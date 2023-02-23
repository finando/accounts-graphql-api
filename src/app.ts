import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { NODE_ENV as environment, HOST as host, PORT as port } from '@app/env';
import { type Context } from '@app/types';
import logger, { serverTags } from '@app/utils/logging';

import context from './graphql/context';
import plugins from './graphql/plugins';
import schema from './graphql/schema';

startStandaloneServer(new ApolloServer<Context>({ schema, logger, plugins }), {
  context,
  listen: { host, port: Number(port) },
}).then(({ url }) => {
  logger.info(`Application is running at ${url} in ${environment} mode`, {
    tags: [...serverTags, 'start'],
  });
});
