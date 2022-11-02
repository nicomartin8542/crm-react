import { useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

const ClienteNuevo = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
      <p className="mt-3"> Llena los datos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto my-2 mb-20 px-5 py-10">
        <form>
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar Cliente"
          />
        </form>
      </div>
    </>
  );
};

export default ClienteNuevo;
