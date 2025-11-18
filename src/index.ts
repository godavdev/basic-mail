import { Elysia } from "elysia"
import { mails } from "./mails"
import { cors } from "@elysiajs/cors"

const app = new Elysia()
  .use(cors({ origin: "*" }))
  .use(mails)
  .get("/hello", () => "Hello World!")
  .listen(Number(process.env.PORT) ?? 3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
