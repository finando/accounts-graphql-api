import { typeDefs as scalarTypeDefs } from 'graphql-scalars';
import { gql } from 'graphql-tag';

export default gql`
  ${scalarTypeDefs.join(' ')}
`;
