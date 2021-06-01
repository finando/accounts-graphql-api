import server from './server';

import env from './env';

import logger, { serverTags } from './utils/logging';

const { NODE_ENV: environment, HOST: host, PORT: port } = env;

server.listen({ host, port }).then(({ url }) => {
  logger.info(`Application is running at ${url} in ${environment} mode`, {
    tags: [...serverTags, 'start']
  });
});
