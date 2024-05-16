import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../services/api.js'; 

// Componente de cartão de serviço
const ServiceCard = ({ title, icon }) => {
  return (
    <div className='xs:w-[250px] w-full cursor-pointer service_card'>
      {/* Card do automovel */}
      <div className='w-full red_gradient p-[1px] rounded-[20px] shadow-card overflow-hidden'>
        <div className='bg-black-100 rounded-t-[20px]'>
          {/* Imagem do automovel  */}
          <img src={icon} alt="icon" className='w-full h-[280px] object-cover' />
        </div>
        <div className='bg-black-100 rounded-b-[20px] py-3 px-6'>
          {/* Título do automovel */}
          <h3 className='text-white text-[20px] font-bold text-center overflow-hidden whitespace-nowrap'>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default function Automoveis() {
  const [data, setData] = useState([]); // Estado para armazenar os dados dos automovels

  // Efeito para buscar os dados dos automovels ao montar o componente
  useEffect(() => {
    handleFetchData();
  }, []);

  // Função para buscar os dados dos automovels da API
  const handleFetchData = async () => {
    try {
      const response = await API.get("automoveis"); // Faz uma requisição GET para a rota 'automoveis'
      setData(response.data); // Atualiza o estado com os dados recebidos da API
    } catch (error) {
      console.error("Erro ao buscar dados:", error); // Exibe um erro no console se houver algum problema na busca dos dados
    }
  };

  return (
    <section className='padding'>
      <div>
        {/* Título da seção */}
        <h2 className={"sectionHeadText"}>Confira nossos automovels</h2>
      </div>
      <p className='mt-4 sectionSubText'>
        {/* Descrição da seção */}
        Não perca as ofertas em nossos de automovels!
      </p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Mapeia os dados dos automovels e renderiza um link para cada automovel */}
        {data.map((game, index) => (
          <Link key={game.id} to={`/details/${game.id}`}> {/* Link para os detalhes do automovel */}
            {/* Componente de cartão de serviço para cada automovel */}
            <ServiceCard key={game.id} index={index} icon={game.imagem} title={game.nome} {...game} />
          </Link>
        ))}
      </div>
    </section>
  );
}