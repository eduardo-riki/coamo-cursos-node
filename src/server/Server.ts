import express from 'express';

import './shared/services/translationError';
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(router);

export { server };