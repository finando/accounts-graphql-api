import { Environment } from '@app/enums';
import { validateEnv } from '@app/utils/common';

import { name } from '../package.json';

const {
  NODE_ENV = Environment.DEVELOPMENT,
  HOST = '0.0.0.0',
  PORT = '8001',
  POSTGRES_HOST = 'localhost',
  POSTGRES_PORT = '5432',
  POSTGRES_USERNAME = 'admin',
  POSTGRES_PASSWORD = 'secret',
  POSTGRES_DB = 'finando.local',
  DATABASE_URL = `postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=${name}`,
} = process.env;

export default validateEnv({
  NODE_ENV:
    NODE_ENV === Environment.DEVELOPMENT
      ? Environment.DEVELOPMENT
      : Environment.PRODUCTION,
  HOST,
  PORT,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  DATABASE_URL,
});
