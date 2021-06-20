import {
  queries as accountQueries,
  mutations as accountMutations,
  lookups as accountLookups
} from './account';

import { createRootResolver, createResolver } from '../../utils/common';

export default {
  ...createRootResolver({ ...accountQueries }, { ...accountMutations }),
  Account: createResolver({ ...accountLookups })
};
