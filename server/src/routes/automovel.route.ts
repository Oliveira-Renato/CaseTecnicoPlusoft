import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

// interface para o corpo da requisição
interface AutomovelRequest {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  descricaoPessoal?: string;
  imageUrl?: string;
}

export async function automovelRoutes(app: FastifyInstance ) {
  app.get("/automoveis", async (req, res) => {
    try {
      const automoveis = await prisma.automovel.findMany();
      res.send(automoveis);
    } catch (error) {
      res.send(error);
    }
  })

  app.post("/automoveis", async (req, res) => {
    try {
      const { marca, modelo, ano, descricaoPessoal, imageUrl } = req.body as AutomovelRequest;
      const novoAutomovel = await prisma.automovel.create({
        data: { marca, modelo, ano, descricaoPessoal, imageUrl },
      });

      res.send(novoAutomovel);
    } catch (error) {
      res.send(error);
    }
  })

  app.put("/automoveis/:id", async (req, res) => {
    try {
      const { id } = req.params as AutomovelRequest;
      const { marca, modelo, ano, descricaoPessoal, imageUrl } = req.body as AutomovelRequest;

      const automovelAtualizado = await prisma.automovel.update({
        where: { id: Number(id) },
        data: { marca, modelo, ano, descricaoPessoal, imageUrl },
      });
      res.send(automovelAtualizado);

    } catch (error) {
      res.send(error);
    }
  })

  app.delete("/automoveis/:id", async (req, res) => {
    try {
      const { id } = req.params as AutomovelRequest;

      await prisma.automovel.delete({
        where: { id: Number(id) },
      });

      res.status(204).send();
    } catch (error) {
      res.send(error);
    }
  })

}

