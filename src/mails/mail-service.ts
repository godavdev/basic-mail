import { createTransport } from "nodemailer"
import { renderForgotMail } from "./templates/forgot-password-template"
import { MailOptions } from "nodemailer/lib/smtp-transport"

export class MailService {
  transporter = createTransport({
    host: process.env.SMTP_HOST ?? "",
    port: Number(process.env.SMTP_PORT ?? ""),
    auth: {
      user: process.env.SMTP_USER ?? "",
      pass: process.env.SMTP_PASS ?? "",
    },
  })

  baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000"

  async sendForgot({
    to,
    code,
    name,
  }: {
    to: string
    code: string
    name: string
  }) {
    const link = `${this.baseUrl}/reset?token=${code}`
    const html = await renderForgotMail({
      code,
      link,
      name,
    })
    const mailOptions: MailOptions = {
      to,
      subject: "Recupera tu contraseña",
      html,
    }
    await this.transporter.sendMail(mailOptions)
  }
}
