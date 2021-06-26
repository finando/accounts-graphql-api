import { validateEnv } from '@app/utils/common';
import { Environment } from '@app/enums';

import { name } from '../package.json';

const {
  NODE_ENV = Environment.DEVELOPMENT,
  HOST = '0.0.0.0',
  PORT = 8001,
  PLAYGROUND = true,
  INTROSPECTION = true,
  POSTGRES_HOST = 'localhost',
  POSTGRES_PORT = 5432,
  POSTGRES_USERNAME = 'admin',
  POSTGRES_PASSWORD = 'secret',
  POSTGRES_DB = 'finando.local'
} = process.env;

process.env.DATABASE_URL = `postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=${name}`;

export default validateEnv({
  NODE_ENV:
    NODE_ENV === Environment.DEVELOPMENT
      ? Environment.DEVELOPMENT
      : Environment.PRODUCTION,
  HOST,
  PORT: Number(PORT),
  PLAYGROUND: ['true', true].includes(PLAYGROUND),
  INTROSPECTION: ['true', true].includes(INTROSPECTION),
  POSTGRES_HOST,
  POSTGRES_PORT: Number(POSTGRES_PORT),
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DB
});
