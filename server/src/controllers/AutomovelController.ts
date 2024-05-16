import AutomovelService from "../services/AutomovelService";
import { FastifyRequest, FastifyReply } from "fastify";
import { AutomovelRequest, ParamsRequest } from "../types/types";

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

async function atualizarAutomovel(req: FastifyRequest, res: FastifyReply) {
  try {
    console.log("PUT /automoveis");
    // Extrai os dados do corpo da requisição e tipa com a interface AutomovelRequest
    // Extrai o ID e os dados do corpo da requisição
    const { id } = req.params as ParamsRequest;
    const data = req.body as AutomovelRequest;

    // Chama o serviço para atualizar o automóvel e passa o ID e os dados recebidos
    const automovelAtualizado = await AutomovelService.atualizarAutomovel(Number(id), data);

    // Envia o automóvel atualizado como resposta
    res.send(automovelAtualizado);
  } catch (error) {
    // Resposta de erro com status 500
    res.status(500).send({ error: 'Erro interno do servidor' });
  }
}

export default { 
  listarAutomoveis,
  cadastrarAutomovel,
  atualizarAutomovel
};