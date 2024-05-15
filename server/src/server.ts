import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = PrismaClient();

app.get("/hello", () => {
  return 'Hello World!'
})

app.listen({
  port: 3333
}).then(() => {
  console.log("🚀  HTTP server running on http://localhost:3333")
})
