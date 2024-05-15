import AutomovelService from "../services/AutomovelService";
import { FastifyRequest, FastifyReply } from "fastify";

async function listarAutomoveis(req: FastifyRequest, res: FastifyReply) {
  try {
    console.log("GET /automoveis");
    const automoveis = await AutomovelService.listarTodos();

    res.send(automoveis);
  } catch (error) {
    // Enviar uma resposta de erro 
    res.status(500).send({ error: 'Erro interno do servidor' });
  }
}

export default { listarAutomoveis };