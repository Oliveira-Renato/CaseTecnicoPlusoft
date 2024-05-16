import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api.js";

export default function Descricao() {
  const { id } = useParams(); // Obtém o parâmetro 'id' da URL
  const [data, setData] = useState({}); // Estado para armazenar os dados do automovel
  const [plataformas, setPlataformas] = useState([]); // Estado para armazenar as plataformas de venda do automovel

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
      // Verifica se há plataformas de venda disponíveis e as define no estado correspondente
      if (response.data.lojas) {
        setPlataformas(response.data.lojas.split("/"));
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return (
    <div className="mt-24 main_bg overflow-hidden">
      <div className="h-[300px] overflow-hidden relative z-10">
        {/* Imagem de fundo com opacidade */}
        <img src={data.imagem} alt="Automovel" className="w-full h-full object-cover opacity-8" />
        {/* Imagem principal */}
        <img src={data.imagem} alt="Automovel" className="absolute top-0 object-contain" />
      </div>
      {/* Informações do automovel*/}
      <main className='paddingX main_bg'>
        <div className={`-mt-24 pb-14 paddingX relative second_bg`}>
          <div className='flex flex-wrap justify-around'>
            {/* Card 1 - Detalhes do automovel*/}
            <div className="third_bg p-10 rounded-b-3xl w-full md:w-[50%] h-fit z-20">
              <p className="text-white font-bold text-[40px]">{data.nome}</p>
              <div className="mt-1">
                <p className="text-white tracking-wider text-[18px] border-2 w-fit">{data.plataformas}</p>
                <div className="mt-7 flex justify-between items-center gap-1">
                  <div className="flex-1 flex flex-col">
                    <p className="text-white font-medium text-[16px]">R${data.preco}</p>
                  </div>
                </div>
              </div>
              {/* Botão de compra */}
              <button className="red_gradient w-full text-white px-4 py-2 my-2 rounded-md buy_button">Comprar</button>
            </div>

            {/* Card 2 - Descrição do automovel*/}
            <div className='mt-10 md:mt-32 w-full md:w-[50%] lg:w-[40%]'>
              <p className="text-white">{data.descricao}</p>

              <div className='mt-6'>
                <p className='text-gray-400 text-sm mb-2'>Além de comprar aqui, você também pode encontrar em alguma de nossas lojas físicas:</p>
                {/* Renderiza as plataformas de venda do automovelou uma mensagem se não houver nenhuma */}
                {plataformas.length > 0 ? (
                  plataformas.map((item, index) => (
                    <Link key={index} to={`/maps/${item}`}> {/* Link para as informações da loja no mapa */}
                      <p className='list_item'> 🏬 {item}</p>
                    </Link>
                  ))
                ) : (
                  <p className='text-sm'>Nenhuma loja física encontrada.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}