import { Link, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import API from "../services/api.js";

export default function Editar() {
  const { id } = useParams(); // Obtém o parâmetro 'id' da URL
  const [data, setData] = useState({}); // Estado para armazenar os dados do automóvel
  const [formData, setFormData] = useState({
    modelo: '',
    marca: '',
    ano: '',
    descricaoPessoal: '',
    imageUrl: '',
  }); // Estado para armazenar os dados do formulário

  // Efeito para buscar os dados do automóvel e preencher o formulário ao montar o componente
  useEffect(() => {
    handleFetchData();
  }, []);

  // Função para buscar os dados do automóvel da API e preencher o formulário
  const handleFetchData = async () => {
    try {
      // Faz uma requisição GET para a rota 'automoveis/:id' para obter os detalhes do automóvel específico
      const response = await API.get(`automoveis/${id}`);
      setData(response.data); // Atualiza o estado com os dados do automóvel recebidos da API
      setFormData(response.data); // Preenche o estado do formulário com os dados do automóvel
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  // Função para lidar com a atualização dos dados do automóvel ao salvar o formulário
  const handleSalvar = async () => {
    try {
      // Faz uma requisição PUT para a rota 'automoveis/:id' com os dados do formulário atualizados
      await API.put(`automoveis/${id}`, formData);
      // Redireciona para a tela inicial após a atualização bem-sucedida
      window.location.href = '/'; // Redirecione para a tela inicial (ou outra rota desejada)
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    }
  };

  // Função para atualizar o estado do formulário com os dados modificados pelo usuário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  return (
    <form className="mt-24 main_bg overflow-hidde">
      <div className="h-[300px] overflow-hidden relative z-10 flex justify-center items-center bg-gray-200">
        {/* Imagem de fundo com opacidade mais baixa */}
        <img
          src={data.imageUrl}
          alt="Automóvel"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-8 0"
        />

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
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleSalvar}
            >
              Salvar
            </button>
            <div
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ml-2"
            >
              <Link to={`/descricao/${id}`}>
                Voltar
              </Link>
            </div>
          </div>
        </div>
      </main> 
    </form>
  );
}