import { Form, redirect, useNavigate, useActionData } from "react-router-dom";
import { deleteClient } from "../data/clientes";

export async function action({ params }) {
  await deleteClient(params.clienteId);
  return redirect("/");
}

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

        <Form
          method="post"
          action={`/cliente/${id}/delete`}
          onSubmit={(e) => {
            if (!confirm("Esta por elminar un registro. Desea continuar? ")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 font-bold text-xs"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Cliente;
