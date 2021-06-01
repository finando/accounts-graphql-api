import type { Environment } from './enums';

export interface EnvironmentVariables {
  NODE_ENV: Environment;
  HOST: string;
  PORT: number;
  PLAYGROUND: boolean;
  INTROSPECTION: boolean;
  POSTGRES_USERNAME: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_HOST: string;
  POSTGRES_PORT: number;
  POSTGRES_DB: string;
}
