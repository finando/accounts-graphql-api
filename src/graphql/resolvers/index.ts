import {
  queries as accountQueries,
  mutations as accountMutations
} from './account';

import { createRootResolver } from '../../utils/common';

export default {
  ...createRootResolver({ ...accountQueries }, { ...accountMutations })
};
