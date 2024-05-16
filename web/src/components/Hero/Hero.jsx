import { Link } from "react-router-dom";
import { heroImg } from "../../assets/index";

export default function Hero() {
  return (
    <section className="padding flex flex-wrap p-8 h-svh bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
      <main className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            VroomVibes: Sua Garagem Virtual!
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-200 lg:text-xl xl:text-2xl">
            Crie, explore e personalize seu automóvel dos sonhos.
          </p>
          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <Link to={"/lista"}
              className="px-8 py-4 text-lg font-medium text-center text-blue-600 bg-white rounded-md shadow-lg hover:bg-gray-100"
            >
              Lista de Automóveis
            </Link>
          </div>
        </div>
      </main>
      {/* imagem */}
      <aside className="flex items-center justify-center w-full lg:w-1/2 relative">
        <div className="absolute overflow-hidden flex justify-end items-center right-[-11%] top-[-12%]">
          <img
            className="min-w-0 min-h-full max-w-full max-h-full object-contain w-full"
            src={heroImg}
            alt="Imagem de destaque de automóvel"
          />
        </div>
      </aside>
    </section>
  );
};