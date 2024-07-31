import express from "express";
import { router } from "./routes";
import "dotenv/config";
import "./shared/services/TraducoesYup";

const app = express();
app.use(express.json());
app.use(router);

export { app };
