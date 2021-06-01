import { v4 as uuid } from 'uuid';

export default async ({ req }) => ({
  requestId: req.headers['request-id'] || uuid()
});
