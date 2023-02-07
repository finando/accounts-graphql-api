import { buildSubgraphSchema } from '@apollo/subgraph';

import resolvers from '../resolvers';
import typeDefs from '../type-defs';

const schema = buildSubgraphSchema([{ typeDefs, resolvers }]);

export default schema;
