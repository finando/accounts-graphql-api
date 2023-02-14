import { gql } from 'graphql-tag';
import { typeDefs as scalarTypeDefs } from 'graphql-scalars';

export default gql`
  ${scalarTypeDefs.join(' ')}
`;
