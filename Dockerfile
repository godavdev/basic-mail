FROM oven/bun

WORKDIR /app

COPY package.json package.json
COPY bun.lock bun.lock

RUN bun install

COPY . .

ENV NODE_ENV=production

CMD ["bun", "run", "start"]
