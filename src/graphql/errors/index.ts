import { GraphQLError } from 'graphql';

export class NotFoundError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: {
        code: 'NOT_FOUND'
      }
    });

    Object.defineProperty(this, 'name', { value: 'NotFoundError' });
  }
}

export class PersistenceError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: {
        code: 'PERSISTENCE_ERROR'
      }
    });

    Object.defineProperty(this, 'name', { value: 'PersistenceError' });
  }
}

export class NotAllowedError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: {
        code: 'NOT_ALLOWED_ERROR'
      }
    });

    Object.defineProperty(this, 'name', { value: 'NotAllowedError' });
  }
}

export class InternalServerError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: {
        code: 'INTERNAL_SERVER_ERROR'
      }
    });

    Object.defineProperty(this, 'name', { value: 'InternalServerError' });
  }
}
