import {
  Form,
  useLoaderData,
  useActionData,
  useNavigate,
} from "react-router-dom";
import Error from "../components/Error";
import Formulario from "../components/Formulario";
import { getCliente } from "../data/clientes";

export function loader({ params }) {
  const { clienteId } = params;

  const cliente = getCliente(clienteId);

  return cliente;
}

export async function action({ request }) {
  const formdata = await request.formData();
  const datos = Object.fromEntries(formdata);

  const error = [];

  //Validate form
  if (Object.values(datos).includes("")) {
    error.push("Todos los campos son olbigatorios");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(datos.email)) {
    error.push("el email no es valido");
  }

  //Retorno error si hay algo en el array
  if (Object.keys(error).length) return error;
}

const EditarCliente = () => {
  const cliente = useLoaderData();
  const error = useActionData();
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        {" "}
        Llena los datos para editar el cliente seleccionado
      </p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
        >
          Volver
        </button>
      </div>

      <div className="bg-white py-10 px-5 my-2 shadow rounded-md md:w-3/4 mx-auto mb-20">
        {error?.length && error.map((err, i) => <Error err={err} key={i} />)}
        <Form method="post" noValidate>
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Editar Cliente"
          />
        </Form>
      </div>
    </div>
  );
};

export default EditarCliente;
