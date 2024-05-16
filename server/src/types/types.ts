// Interface para tipar o corpo da requisição POST e PUT
interface AutomovelRequest {
  marca: string;
  modelo: string;
  ano: string;
  descricaoPessoal?: string;
  imageUrl?: string;
}

// Interface para tipar parâmetro 'id' nas rotas PUT e DELETE
interface ParamsRequest {
  id: string;
}

export {
  AutomovelRequest,
  ParamsRequest
}