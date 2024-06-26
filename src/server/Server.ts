import express from "express";

import "./shared/services/TranslationError";
import { router } from "./routes";
import cors from "cors";

const server = express();

server.use(
  cors({
    origin: '*',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

server.use(express.json());
server.use(router);

export { server };
