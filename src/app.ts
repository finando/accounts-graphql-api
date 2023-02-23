import { NODE_ENV as environment, HOST as host, PORT as port } from '@app/env';
import logger, { serverTags } from '@app/utils/logging';

import server from './server';

server({ host, port: Number(port) }).then(({ url }) => {
  logger.info(`Application is running at ${url} in ${environment} mode`, {
    tags: [...serverTags, 'start'],
  });
});
