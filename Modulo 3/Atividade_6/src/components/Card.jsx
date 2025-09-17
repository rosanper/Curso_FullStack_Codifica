import { useState, useContext, useEffect } from "react";
import { ContadorContext } from "../contexts/ContadorContext";
import Botao from "./Botao";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Importa os ícones de estrela

function Card({ item }) {
  const { setContador } = useContext(ContadorContext);
  const [loading, setLoading] = useState(true);

  const getLocalStorage = () => {
    const data = localStorage.getItem("adicionados");
    return data ? JSON.parse(data) : [];
  };

  const [isAdicionado, setIsAdicionado] = useState(() => {
    const listaLocalStorage = getLocalStorage();
    return !!listaLocalStorage.find((elemento) => elemento.id === item.id);
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const adicionar = (item) => {
    const listaLocalStorage = getLocalStorage();
    const novaLista = [...listaLocalStorage, item];
    localStorage.setItem("adicionados", JSON.stringify(novaLista));
    setContador(novaLista.length);
  };

  const remover = (item) => {
    const listaLocalStorage = getLocalStorage();
    const novaLista = listaLocalStorage.filter((elemento) => elemento.id !== item.id);
    localStorage.setItem("adicionados", JSON.stringify(novaLista));
    setContador(novaLista.length);
  };

  const toggleAdicionados = (item) => {
    if (!isAdicionado) {
      adicionar(item);
      setIsAdicionado(true);
    } else {
      remover(item);
      setIsAdicionado(false);
    }
  };

  const Skeleton = () => (
    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl p-4">
      <div className="h-48 w-full mb-4 rounded-md bg-gray-300 dark:bg-gray-600"></div>
      <div className="h-6 w-3/4 mb-2 rounded-md bg-gray-300 dark:bg-gray-600"></div>
      <div className="h-4 w-1/2 mb-4 rounded-md bg-gray-300 dark:bg-gray-600"></div>
      <div className="h-8 w-full rounded-md bg-gray-300 dark:bg-gray-600"></div>
    </div>
  );

  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 transition-all duration-300
        flex flex-col justify-between items-center
        hover:shadow-lg hover:-translate-y-1
        focus-within:ring-2 focus-within:ring-blue-500
        min-w-[280px] w-full
        text-gray-900 dark:text-white
      `}
      aria-live="polite"
    >
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <div className="relative w-full aspect-square overflow-hidden mb-4">
            <img className="object-cover w-full h-full rounded-md bg-white" src={item.imagem} alt={item.nome} />
            {(item.tag === "Novo" || item.tag === "Promoção") && (
              <span
                className="absolute top-2 left-2 px-2 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full"
                aria-label={item.tag}
              >
                {item.tag}
              </span>
            )}
          </div>
          <div className="flex-1 w-full text-center">
            <h3 className="font-bold text-lg mb-1 truncate line-clamp-2" aria-label={`Nome do produto: ${item.nome}`}>
              {item.nome}
            </h3>
            <div className="mb-2">
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                R$ {item.preco.toFixed(2).replace('.', ',')}
              </p>
              <div className="flex items-center justify-center mt-1 text-yellow-400" aria-label={`Avaliação: ${item.avaliacao} estrelas`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>
                    {item.avaliacao >= index + 1 ? (
                      <AiFillStar className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <AiOutlineStar className="w-5 h-5 text-gray-400" />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full mt-4">
            <Botao isAdicionado={isAdicionado} toggleAdicionados={toggleAdicionados} item={item} />
          </div>
        </>
      )}
    </div>
  );
}

export default Card