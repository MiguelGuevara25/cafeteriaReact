import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useQuiosco();

  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img className="w-40" src="img/logo.svg" alt="Imagen Logo" />
      </div>

      <div className="mt-10">
        {categorias.map((categoria) => (
          <Categoria categoria={categoria} key={categoria.id} />
        ))}
      </div>

      <div className="my-5 px-5">
        <button
          type="button"
          className="text-center text-white w-full p-3 truncate font-bold bg-red-500"
        >
          Cancelar Orden
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
