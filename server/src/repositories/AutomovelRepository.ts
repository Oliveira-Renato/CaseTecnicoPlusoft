import { prisma } from "../lib/prisma";

async function listarTodos() {
  try {
    console.log("GET repositories /automoveis");
    return await prisma.automovel.findMany();
  } catch (error) {
    console.log(error);
  }
}

export default { listarTodos };