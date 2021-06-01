import { ApolloServer } from 'apollo-server';

import env from './env';

import logger from './utils/logging';

import context from './graphql/context';
import plugins from './graphql/plugins';
import schema from './graphql/schema';
import onHealthCheck from './graphql/health-check';

const { INTROSPECTION: introspection, PLAYGROUND: playground } = env;

export default new ApolloServer({
  context,
  plugins,
  schema,
  introspection,
  playground,
  onHealthCheck,
  logger
});
