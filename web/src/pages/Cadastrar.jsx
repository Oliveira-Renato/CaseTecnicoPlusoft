import { Link, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import API from "../services/api.js";

export default function Cadastrar() {
  const [formData, setFormData] = useState({
    modelo: '',
    marca: '',
    ano: '',
    descricaoPessoal: '',
    imageUrl: '',
  }); // Estado para armazenar os dados do formulário

  const handleSalvar = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão de envio do formulário]
    // Converte o campo "ano" para um número
    const anoNumerico = Number(formData.ano);

    // Atualiza o formData com o ano convertido para numérico
    const formDataAtualizado = {
      ...formData,
      ano: anoNumerico,
    };

    try {
      // Faz uma requisição POST para a rota 'automoveis' com os dados do formulário
      const retorno = await API.post('automoveis', formDataAtualizado);
      console.log(retorno)

      // Redireciona para a tela inicial após o cadastro bem-sucedido
      window.location.href = '/'; 
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSalvar} className=" main_bg overflow-hidde">
      <div className="h-[300px] overflow-hidden relative z-10 flex justify-center items-center bg-gray-50 w-full">
        {/* Imagem de fundo com opacidade mais baixa */}
        <div className=" z-20 bg-gray-200 px-4 py-2 w-auto">
          {/* Campo de entrada para a URL da imagem */}
          <TextField
            name="imageUrl"
            label="URL"
            value={formData.imageUrl}
            onChange={handleInputChange}
            variant="standard"
            fullWidth
          />
        </div>
      </div>
      {/* Informações do automovel*/}
      <main className='paddingX main_bg'>
        <div className={`-mt-24 pb-14 paddingX relative  bg-gray-100`}>
          <div className='flex flex-wrap justify-around'>
            {/* Card 1 - Detalhes do automovel*/}
            <div className="bg-gray-200 p-5 rounded-b-3xl w-full md:w-[50%] h-fit z-20 my-16">
              <TextField
                id="filled-helperText"
                name="modelo"
                label="Modelo"
                value={formData.modelo}
                onChange={handleInputChange}
                variant="filled"
              />
              <div className="flex flex-col">
                <TextField
                  id="filled-helperText"
                  name="marca"
                  label="Marca"
                  value={formData.marca}
                  onChange={handleInputChange}
                  variant="filled"
                />
                <TextField
                  id="filled-helperText"
                  name="ano"
                  label="Ano"
                  value={formData.ano}
                  onChange={handleInputChange}
                  variant="filled"
                  type="number"
                />
              </div>
            </div>

            {/* Card 2 - Descrição do automovel*/}
            <div className='md:mt-32 w-full md:w-[50%] lg:w-[40%]'>
              <div className='mt-6'>
                <TextField
                  name="descricaoPessoal"
                  label="Descrição"
                  value={formData.descricaoPessoal}
                  onChange={handleInputChange}
                  multiline
                  rows={2}
                  variant="filled"
                  fullWidth
                />
              </div>
            </div>
          </div>
          {/* Botões de ação (Salvar e Cancelar) */}
          <div className="flex items-center justify-between bg-gray-200 p-4 md:mx-7 rounded-md shadow-md">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleSalvar}
            >
              Salvar
            </button>
            <div
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ml-2"
            >
              <Link to={"/"}>
                Cancelar
              </Link>
            </div>
          </div>
        </div>
      </main> 
    </form>
  );
}