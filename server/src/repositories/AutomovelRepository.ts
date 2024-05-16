import { prisma } from "../lib/prisma";
import { AutomovelRequest, ParamsRequest } from "../types/types";

async function listarTodos() {
  try {
    console.log("GET repositories /automoveis");
    return await prisma.automovel.findMany();
  } catch (error) {
    console.log(error);
  }
}

async function cadastrarAutomovel(data: AutomovelRequest) {
  try {
    const automovel = await prisma.automovel.create({data})
    return automovel;
  } catch (error) {
    throw new Error('Não foi possível cadastrar o automóvel');
  }
}

async function atualizarAutomovel(id: number , data: AutomovelRequest) {
  try {
    const automovelAtualizado = await prisma.automovel.update({
      where: { id },
      data,
    });
    return automovelAtualizado;
  } catch (error) {
    throw new Error("Não foi possível atualizar o automóvel");
  }
}
export default { 
  listarTodos,
  cadastrarAutomovel,
  atualizarAutomovel
};