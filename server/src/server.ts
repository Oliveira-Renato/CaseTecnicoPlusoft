import fastify from "fastify";
import { automovelRoutes } from "./routes/automovel.route";

const app = fastify();

app.register(automovelRoutes);

app.listen({
  port: 3333
}).then(() => {
  console.log("🚀  HTTP server running on http://localhost:3333")
})
