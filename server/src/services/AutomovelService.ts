import AutomovelRepository from "../repositories/AutomovelRepository";
import { AutomovelRequest, ParamsRequest } from "../types/types";

async function listarTodos() {
  try {
    console.log("GET SERVICES /automoveis");
    return await AutomovelRepository.listarTodos();
  } catch (error) {
    console.log(error);
  }
}

async function cadastrarAutomovel(data: AutomovelRequest) {
  try {
    console.log("POST SERVICES /automoveis");
    return await AutomovelRepository.cadastrarAutomovel(data);
  } catch (error) {
    console.log(error);
  }
}

async function atualizarAutomovel(id: number, data: AutomovelRequest) {
  try {
    console.log("PUT SERVICES /automoveis");
    return await AutomovelRepository.atualizarAutomovel(id, data);
  } catch (error) {
    console.log(error);
  }
}

async function deleteAutomovel(id: number) {
  try {
    return await AutomovelRepository.deleteAutomovel(id);
  } catch (error) {
    console.log(error);
  }
}

export default { 
  listarTodos,
  cadastrarAutomovel,
  atualizarAutomovel,
  deleteAutomovel
};