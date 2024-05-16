import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api.js";

export default function Descricao() {
  const { id } = useParams(); // Obtém o parâmetro 'id' da URL
  const [data, setData] = useState({}); // Estado para armazenar os dados do automovel

  // Efeito para buscar os dados do automovele as plataformas de venda ao montar o componente
  useEffect(() => {
    handleFetchData();
  }, []);

  // Função para buscar os dados do automovele as plataformas de venda da API
  const handleFetchData = async () => {
    try {
      // Faz uma requisição GET para a rota 'games/:id' para obter os detalhes do automovelespecífico
      const response = await API.get(`automoveis/${id}`);
      setData(response.data); // Atualiza o estado com os dados do automovelrecebidos da API
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const handleDeleteClick = async () => {
    // Exibe a mensagem de confirmação
    const shouldDelete = window.confirm('Tem certeza que deseja deletar este automóvel?');
  
    if (shouldDelete) {
      try {
        // Chama a API para deletar o automóvel
        await API.delete(`automoveis/${id}`);

        // Redireciona para a tela inicial após o cadastro bem-sucedido
        window.location.href = '/'; 
      } catch (error) {
        console.log(error);
      }
    }
  };
  

  return (
    <div className="bg-gradient-to-br overflow-hidden">
      <div className="h-[300px] overflow-hidden relative z-10">
        {/* Imagem de fundo com opacidade mais baixa */}
        <img
          src={data.imageUrl}
          alt="Automóvel"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-8 0"
        />
        {/* Imagem principal */}
        <img src={data.imageUrl} alt="Automóvel" className="absolute top-0 left-0 sm:w-auto max-w-[600px] h-auto object-cover opacity-100" />
      </div>
      {/* Informações do automovel*/}
      <main className='paddingX'>
        <div className={`-mt-24 pb-14 paddingX relative second_bg`}>
          <div className='flex flex-wrap justify-around'>
            {/* Card 1 - Detalhes do automovel*/}
            <div className="third_bg p-5 rounded-b-3xl w-full md:w-[50%] h-fit z-20 my-16">
              <p className="text-white font-bold text-[40px]">{data.modelo}</p>
              <div className="mt-1">
                <p className="text-white tracking-wider text-[18px] border-2 w-fit p-2 mb-2">{data.marca}</p>
                <p className="text-white font-medium text-[16px]">Ano : {data.ano}</p>
              </div>
            </div>

            {/* Card 2 - Descrição do automovel*/}
            <div className='md:mt-32 w-full md:w-[50%] lg:w-[40%]'>
              <div className='mt-6'>
                <p className='text-gray-200 text-md mb-2'>{data.descricaoPessoal}</p>
              </div>
            </div>
          </div>
          {/* botões */}
          <div className="flex items-center justify-between third_bg p-4 md:mx-7 rounded-md shadow-md">
            <div
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Link to={`/editar/${id}`}>
                Editar
              </Link>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ml-2"
              onClick={handleDeleteClick}
            >
              Deletar
            </button>
          </div>
        </div>
      </main> 
    </div>
  );
}