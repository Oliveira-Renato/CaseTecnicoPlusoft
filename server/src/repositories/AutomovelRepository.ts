import { prisma } from "../lib/prisma";
import { AutomovelRequest } from "../types/types";

async function listarTodos() {
  try {;
    return await prisma.automovel.findMany();
  } catch (error) {
    console.log(error);
  }
}

async function infoAutomovel(id: number) {
  try {
    const automovel = await prisma.automovel.findUnique({
      where: {id}
    });
    return automovel;
  } catch (error) {
    console.log(error);
  }
}

async function cadastrarAutomovel(data: AutomovelRequest) {
  try {
    const automovel = await prisma.automovel.create({data})
    return automovel;
  } catch (error) {
    throw new Error("Não foi possível cadastrar o automóvel");
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

async function deleteAutomovel(id: number) {
  try {
    await prisma.automovel.delete({
      where: { id },
    });

    return "Automovel deletado com sucesso!"
  } catch (error) {
    throw new Error("Não foi possível deletar o automóvel");
  }
}

export default { 
  listarTodos,
  infoAutomovel,
  cadastrarAutomovel,
  atualizarAutomovel,
  deleteAutomovel
};