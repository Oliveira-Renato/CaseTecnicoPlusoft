import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import  AutomovelController from "../controllers/AutomovelController";

// Interface para tipar o corpo da requisição POST e PUT
interface AutomovelRequest {
  marca: string;
  modelo: string;
  ano: number;
  descricaoPessoal?: string;
  imageUrl?: string;
}

// Interface para tipar parâmetro 'id' nas rotas PUT e DELETE
interface ParamsRequest {
  id: string;
}

export async function automovelRoutes(app: FastifyInstance) {
  // Rota GET para listar todos os automóveis
  app.get('/automoveis', AutomovelController.listarAutomoveis);

  // Rota POST para criar um novo automóvel
  app.post("/automoveis", AutomovelController.cadastrarAutomovel);

  // Rota PUT para atualizar um automóvel existente
  app.put("/automoveis/:id", AutomovelController.atualizarAutomovel);

  // Rota DELETE para remover um automóvel
  app.delete("/automoveis/:id", async (req, res) => {
    try {
      const { id } = req.params as ParamsRequest;

      await prisma.automovel.delete({
        where: { id: parseInt(id) },
      });

      // Retorna o status 204 para deleção bem-sucedida sem conteúdo no corpo da resposta
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ error: "Erro ao deletar automóvel" });
    }
  });
}
