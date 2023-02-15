import { type IncomingHttpHeaders } from 'http';

import { type GraphQLFieldResolver, type GraphQLTypeResolver } from 'graphql';
import { v4 as uuid } from 'uuid';

import {
  type Operation,
  type Resolvers,
  type Context,
  type Resolver,
} from '@app/types';

const isFieldResolver = (
  args: unknown[]
): args is Parameters<
  GraphQLFieldResolver<Readonly<Record<string, unknown>>, Readonly<Context>>
> => args.length === 4;

const isTypeResolver = (
  args: unknown[]
): args is Parameters<
  GraphQLTypeResolver<Readonly<Record<string, unknown>>, Readonly<Context>>
> => args.length === 4;

const resolve =
  (
    resolver: Resolver<unknown, unknown>
  ):
    | GraphQLFieldResolver<unknown, object>
    | GraphQLTypeResolver<unknown, unknown> =>
  (...args: unknown[]) => {
    if (isFieldResolver(args)) {
      const [root, input, context, info] = args;

      return resolver.call(null, { root, input, value: {}, context, info });
    }
    if (isTypeResolver(args)) {
      const [value, context, info] = args;

      return resolver.call(null, { root: {}, input: {}, value, context, info });
    }

    throw new Error(
      'Unexpected number of resolver function arguments, expected 3 or 4'
    );
  };

export const createResolver = (
  operations:
    | Resolvers[Operation.QUERY]
    | Resolvers[Operation.MUTATION]
    | Resolvers[Operation.LOOKUP]
) =>
  Object.entries(operations).reduce(
    (previous, [operation, resolver]) => ({
      ...previous,
      [operation]: resolve(resolver),
    }),
    {}
  );

export const createRootResolver = (
  queries: Resolvers[Operation.QUERY],
  mutations: Resolvers[Operation.MUTATION]
) => ({
  Query: createResolver(queries),
  Mutation: createResolver(mutations),
});

function assertIsDefined<T>(
  key: string,
  value: T
): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`Expected ${key} to be defined, but received ${value}`);
  }
}

export const validateEnv = <T extends object>(env: T): T => {
  Object.entries(env).forEach(([key, value]) => assertIsDefined(key, value));

  return env;
};

export const getRequestId = ({
  'request-id': requestIdHeader,
}: IncomingHttpHeaders): string =>
  (typeof requestIdHeader === 'string'
    ? requestIdHeader
    : requestIdHeader?.shift()) || uuid();
