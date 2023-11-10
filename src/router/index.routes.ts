import { Elysia } from "elysia";
import contents from "../modules/contents/content.routes";

const app = new Elysia();

app.group("/v1", (app) => app.get("/", () => "Using v1").use(contents));

export default app;
