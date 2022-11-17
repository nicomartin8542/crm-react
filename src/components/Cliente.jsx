import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente }) => {
  const navitage = useNavigate();

  const { nombre, empresa, email, telefono, id } = cliente;
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold mr-1">Email:</span>
          {email}
        </p>
        <p className="text-gray-600 space-y-2">
          <span className="text-gray-800 uppercase font-bold mr-1">
            Telefono:
          </span>
          {telefono}
        </p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 font-bold text-xs"
          onClick={() => navitage(`/cliente/${id}/editar`)}
        >
          Editar
        </button>
        <button
          type="button"
          className="text-red-600 hover:text-red-700 font-bold text-xs"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
