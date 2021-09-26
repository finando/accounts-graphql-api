import { resolvers as scalarResolvers } from 'graphql-scalars';

import { createRootResolver, createResolver } from '@app/utils/common';

import {
  queries as accountQueries,
  mutations as accountMutations,
  lookups as accountLookups
} from './account';

export default {
  ...createRootResolver({ ...accountQueries }, { ...accountMutations }),
  Account: createResolver({ ...accountLookups }),
  ...scalarResolvers
};
