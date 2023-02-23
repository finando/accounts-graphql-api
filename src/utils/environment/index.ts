import { type EnvironmentVariables } from '@app/types';
import { isDefined } from '@app/utils/common';

export const validate = (env: EnvironmentVariables): void =>
  Object.entries(env).forEach(([key, value]) => {
    if (!isDefined(value)) {
      throw Error(
        `Expected ${key} to be defined in the environment, but received ${value}`
      );
    }
  });
