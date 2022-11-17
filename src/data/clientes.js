export async function obtenerCliente() {
  const data = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await data.json();

  return resultado;
}

export const crearClient = async (datos) => {
  try {
    const data = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: { "Content-Type": "application/json " },
    });

    const resultado = await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const getCliente = async (id) => {
  const data = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const resultado = await data.json();

  return resultado;
};
