import { FastifyInstance } from "fastify";
import  AutomovelController from "../controllers/AutomovelController";

async function automovelRoutes(app: FastifyInstance) {
  // Rota GET para listar todos os automóveis
  app.get('/automoveis', AutomovelController.listarAutomoveis);

  // Rota POST para criar um novo automóvel
  app.get("/automoveis/:id", AutomovelController.infoAutomovel);

  // Rota POST para criar um novo automóvel
  app.post("/automoveis", AutomovelController.cadastrarAutomovel);

  // Rota PUT para atualizar um automóvel existente
  app.put("/automoveis/:id", AutomovelController.atualizarAutomovel);

  // Rota DELETE para remover um automóvel
  app.delete("/automoveis/:id", AutomovelController.deleteAutomovel);
}

export default automovelRoutes;