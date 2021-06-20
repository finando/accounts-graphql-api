import type { GraphQLResolveInfo } from 'graphql';

export interface Context {
  requestId: string;
}

interface Input<TRoot, TInput, TValue> {
  root: Readonly<TRoot>;
  input: Readonly<TInput>;
  value: Readonly<TValue>;
  context: Readonly<Context>;
  info: GraphQLResolveInfo;
}

export type Resolver<
  TParams,
  TOutput,
  TRoot = Record<string, unknown>,
  TValue = Record<string, unknown>
> = (input: Readonly<Input<TRoot, TParams, TValue>>) => Promise<TOutput>;

export type RequestOptions = Readonly<{
  requestId?: string;
  fieldName?: string;
  userId?: string;
}>;
