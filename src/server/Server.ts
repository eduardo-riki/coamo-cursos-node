import express from "express";

import "./shared/services/TranslationError";
import { router } from "./routes";
import cors from "cors";

const server = express();

server.use(
  cors({
    origin: process.env.ENABLED_CORS?.split(";") || [],
    methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["X-Requested-With", "Content-Type"],
    credentials: true,
  })
);

server.use(express.json());
server.use(router);

export { server };
