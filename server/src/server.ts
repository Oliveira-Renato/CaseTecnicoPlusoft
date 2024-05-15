import fastify from "fastify";

const app = fastify();

app.listen({
  port: 33333
}).then(() => {
  console.log("🚀  HTTP server running on http://localhost:3333")
})
