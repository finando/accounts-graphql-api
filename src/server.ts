import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import logger from '@app/utils/logging';
import { type Context } from '@app/types';

import context from './graphql/context';
import plugins from './graphql/plugins';
import schema from './graphql/schema';
import { ListenOptions } from 'net';

export default (listen: ListenOptions) =>
  startStandaloneServer(
    new ApolloServer<Context>({ schema, logger, plugins }),
    { context, listen }
  );
