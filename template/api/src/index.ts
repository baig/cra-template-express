import 'reflect-metadata';
import moduleAlias from 'module-alias';
import { config } from 'dotenv';

config();

moduleAlias.addPath(__dirname);

import 'app';
