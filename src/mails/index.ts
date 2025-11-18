import Elysia, { t } from "elysia"
import { MailService } from "./mail-service"

export const mails = new Elysia()
  .decorate("mailService", new MailService())
  .get(
    "/",
    async ({ query, mailService, status }) => {
      await mailService.sendForgot({
        to: query.to,
        code: query.code,
        name: query.name,
      })
      return status("OK")
    },
    {
      query: t.Object({
        name: t.String(),
        to: t.String(),
        code: t.String(),
      }),
    }
  )
