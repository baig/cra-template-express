import express from 'express';
import { apiRoutes } from 'route';
import { config } from 'config';
import { createConnection } from 'typeorm';
import { database } from './database';
import {
  bootstrapMiddlewareBefore,
  bootstrapMiddlewareAfter,
} from './middleware';

const app = express();

(async () => {
  try {
    await createConnection(database);

    bootstrapMiddlewareBefore(app);

    app.use(apiRoutes);

    bootstrapMiddlewareAfter(app);

    app.listen(config.app.port, () => {
      console.log(
        `Server running on http://${config.app.host}:${config.app.port}`,
      );
    });
  } catch (error) {
    console.log(error);
  }
})();
