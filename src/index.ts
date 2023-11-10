import { Elysia } from "elysia";
import routes from "./router/index.routes"

const app = new Elysia();

app.get("/", () => "Hello Elysia");

app.use(routes)

app.listen(3015);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
