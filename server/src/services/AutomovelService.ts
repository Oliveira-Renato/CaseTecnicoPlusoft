import AutomovelRepository from '../repositories/AutomovelRepository';

async function listarTodos() {
  try {
    console.log("GET SERVICES /automoveis");
    return await AutomovelRepository.listarTodos();
  } catch (error) {
    console.log(error);
  }
}

export default { listarTodos };