import { Elysia } from "elysia"
import { mails } from "./mails"

const app = new Elysia().use(mails).listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
