import moduleAlias from 'module-alias';
import { join } from 'path';
import { config as dotenv } from 'dotenv';

dotenv();
moduleAlias.addPath(
  join(__dirname, process.env.NODE_ENV === 'production' ? 'build' : 'src'),
);

import { database } from './src/app/database';
export = database;
