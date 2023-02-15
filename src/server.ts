import { type ListenOptions } from 'net';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { type Context } from '@app/types';
import logger from '@app/utils/logging';

import context from './graphql/context';
import plugins from './graphql/plugins';
import schema from './graphql/schema';

export default (listen: ListenOptions) =>
  startStandaloneServer(
    new ApolloServer<Context>({ schema, logger, plugins }),
    { context, listen }
  );
