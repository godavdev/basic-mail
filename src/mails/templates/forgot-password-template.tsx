import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  render,
  Text,
} from "@react-email/components"

interface Props {
  link: string
  code: string
  name: string
}

const ForgotMail = ({ code, link, name }: Props) => (
  <Html>
    <Head></Head>
    <Body style={{ backgroundColor: "white" }}>
      <Preview>Recupera la contraseña</Preview>
      <Container style={{ margin: "0 auto", padding: "0 12px" }}>
        <Heading
          style={{
            margin: "40px 0",
            padding: "0",
            fontSize: "24px",
            color: "black",
          }}
        >
          Recupera la contraseña, {name}
        </Heading>
        <Link
          style={{
            display: "block",
            marginBottom: "16px",
            color: "#2754C5",
            fontSize: "14px",
            textDecoration: "underline",
          }}
          href={link}
          target="_blank"
        >
          Haz clic aquí para recuperar tu contraseña
        </Link>
        <Text
          style={{
            margin: "24px 0 14px",
            fontSize: "14px",
            color: "black",
          }}
        >
          O, copia y pega este código de acceso temporal:
        </Text>
        <code
          style={{
            display: "inline-block",
            width: "90%",
            borderRadius: "6px",
            border: "1px solid #808080",
            backgroundColor: "#D3D3D3",
            padding: "16px 4.5%",
            color: "black",
          }}
        >
          {code}
        </code>
        <Text
          style={{
            marginTop: "14px",
            marginBottom: "16px",
            fontSize: "14px",
            color: "#808080",
          }}
        >
          Si no intentaste recuperar tu contraseña, puedes ignorar este correo
          electrónico.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const renderForgotMail = (props: Props) =>
  render(<ForgotMail {...props} />)
