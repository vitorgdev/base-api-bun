import { Elysia } from "elysia";
import ContentController from "./content.controller";

const contentController = new ContentController();

const app = new Elysia();

app.get("/contents", () => contentController.getAll());

export default app;
