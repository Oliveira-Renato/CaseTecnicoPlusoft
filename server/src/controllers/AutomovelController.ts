import AutomovelService from "../services/AutomovelService";
import { FastifyRequest, FastifyReply } from "fastify";
import { AutomovelRequest, ParamsRequest } from "../types/types"

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

async function cadastrarAutomovel(req: FastifyRequest, res: FastifyReply) {
  try {
    console.log("POST /automoveis");
    // Extrai os dados do corpo da requisição e tipa com a interface AutomovelRequest
    const data = req.body as AutomovelRequest;
    // Chama o serviço para cadastrar o novo automóvel e passa os dados recebidos
    const novoAutomovel = await AutomovelService.cadastrarAutomovel(data);
    // Envia o automóvel recém-criado como resposta
    res.status(201).send(novoAutomovel);
  } catch (error) {
    // resposta de erro 
    res.status(500).send({ error: 'Erro interno do servidor' });
  }
}

export default { 
  listarAutomoveis,
  cadastrarAutomovel
};