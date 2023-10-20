import {useState} from "react";


export default function CreateProduct() {
  const [nombre_producto, setNombre_producto] = useState(undefined)
  const [precio, setPrecio] = useState(undefined)
  const [url, setUrl] = useState(undefined)
  const [descripcion_corta, setDescripcion_corta] = useState(undefined)
  const [descripcion, setDescripcion] = useState(undefined)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      nombre_producto,
      precio,
      url_imagen: url,
      descripcion_corta,
      descripcion,
    }

    const reponse = await fetch('http://localhost:localhost≥≥≥≥4000/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    console.log(await reponse.json())
  }

  return (
    <div className="App">
      <h1>React Create Product</h1>

      <form>
        <label htmlFor="">Nombre del producto</label>
        <input type="text" name="nombre_producto" id="nombre_producto" onChange={(e) => setNombre_producto(e.target.value)} />

        <label htmlFor="">Precio</label>
        <input type="text" name="precio" id="precio" onChange={(e) => setPrecio(e.target.value)} />

        <label htmlFor="">URL de la imagen</label>
        <input type="text" name="url" id="url" onChange={(e) => setUrl(e.target.value)} />

        <label htmlFor="">Descripción corta</label>
        <input type="text" name="descripcion_corta" id="descripcion_corta" onChange={(e) => setDescripcion_corta(e.target.value)} />

        <label htmlFor="">Descripción</label>
        <input type="text" name="descripcion" id="descripcion" onChange={(e) => setDescripcion(e.target.value)} />


        <button onClick={(e) => handleSubmit(e)}>Crear producto</button>
      </form>
    </div>
  );
}
