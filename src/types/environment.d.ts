import { type Environment } from '@app/enums';

export interface EnvironmentVariables {
  NODE_ENV: Environment;
  HOST: string;
  PORT: string;
  POSTGRES_HOST: string;
  POSTGRES_PORT: string;
  POSTGRES_USERNAME: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
  DATABASE_URL: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvironmentVariables {}
  }
}
