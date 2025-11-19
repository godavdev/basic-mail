# Basic Mail

Este es un proyecto simple para enviar correos electrónicos utilizando **Elysia**, **Nodemailer** y **React Email**.

## Requisitos

- [Bun](https://bun.sh/)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/basic-mail.git
   cd basic-mail
   ```

2. Instala las dependencias:
   ```bash
   bun install
   ```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables para configurar tu servidor SMTP:

```
SMTP_HOST=tu_host_smtp
SMTP_PORT=tu_puerto_smtp
SMTP_USER=tu_usuario_smtp
SMTP_PASS=tu_contraseña_smtp
PORT=3000
```

## Ejecutando el Proyecto

Para iniciar el servidor en modo de desarrollo, ejecuta:

```bash
bun dev
```

El servidor se iniciará en `http://localhost:3000`.

## Cómo Funciona

El proyecto utiliza **Elysia** para crear un servidor web. El servicio de correo (`MailService`) se encarga de enviar correos electrónicos a través de **Nodemailer**. Las plantillas de correo electrónico se renderizan utilizando **React Email**, lo que permite crear correos electrónicos con componentes de React.

El endpoint principal `/` (definido en `src/mails/index.ts`) puede ser utilizado para enviar correos de recuperación de contraseña.

## Plantillas de correo

En este caso estamos utilizando una plantilla de correo electrónico para la recuperación de contraseña, definida en `src/mails/templates/forgot-password-template.tsx`. Esta plantilla utiliza componentes de **React Email** para estructurar el contenido del correo.
