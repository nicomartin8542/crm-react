import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Error from "../components/Error";
import Formulario from "../components/Formulario";
import { crearClient } from "../data/clientes";

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

  //Si todo sale bien creo el cliente
  await crearClient(datos);
  return redirect("/");
}

const ClienteNuevo = () => {
  const navigate = useNavigate();
  const error = useActionData();
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
        {error?.length && error.map((err, i) => <Error err={err} key={i} />)}

        <Form method="post" noValidate>
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default ClienteNuevo;
