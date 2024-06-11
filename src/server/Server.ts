import express from "express";

import "./shared/services/TranslationError";
import { router } from "./routes";
import cors from "cors";

const server = express();

server.use(
  cors({
    origin: process.env.URL_BASE || "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["X-Requested-With", "Content-Type"],
    credentials: true,
  })
);

server.use(express.json());
server.use(router);

export { server };
