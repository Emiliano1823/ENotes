import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [notas, setNotas] = useState([])

  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')

  // Para editar notas
  const [editandoId, setEditandoId] = useState(null) // Para saber si estamos editando o no

  useEffect(() => { // Cada vez que nuestra app se ejecute va a llamar esta función, es para ejecutarse n veces
    fetchNotas()
  }, [])

  // programar la función FetchNotas ---------------------------------------

  const fetchNotas = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/notas')
      // Cada ejecucion al iniciar usa un fetch, 
      // va a llamar al backend, actualiza la db, lo convierte en JSON
      // Lo setea a DATA y con data se va a guardar en la variable Notas
      const data = await response.json();
      setNotas(data)
    } catch {
      console.log("Error al obtener notas")
    }
  }

  // Crear notas ------------------------------------------------------------

  const crearNota = async () => {
    if (!titulo || !descripcion) return alert("Completa todos los campos")

    try {

      // Y en este caso mandamos el objeto y el ID
      if (editandoId) { // Si editando ID está activo 
        await fetch(`http://localhost:8080/api/notas/${editandoId}`,
          {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({ titulo, descripcion }) // Mandar la nueva información cargada
          }
        )

        setEditandoId(null)
      } else { // Mandamos nada más el objeto
        await fetch("http://localhost:8080/api/notas",
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({ titulo, descripcion }) // Mandar la nueva información cargada
          }
        )
      }

      setTitulo('') // Una vez que guardamos algo hay que limpiar
      setDescripcion('')
      fetchNotas() // Cada nueva nota actualizamos la app

    } catch (error) {
      console.log("Error al guardar o editar la nota")
    }
  }

  // Eliminar nota ------------------------------------------------------------

  const eliminarNota = async (id) => { // Es asincrono por la tardanza de la DB

    try {
      await fetch(`http://localhost:8080/api/notas/${id}`,
        {
          method: 'DELETE',
        })
        fetchNotas()
    } catch (error) {
      console.log("Error al eliminar la nota")
    }

  }

  // Editar notas ---------------------------------------------------------------
  const editarNota = (nota) => {
    setTitulo(nota.titulo)
    setDescripcion(nota.descripcion)
    setEditandoId(nota.id)
  }

  // ----------------------------------------------------------------------------
  // DISEÑO
  // ----------------------------------------------------------------------------
  return (
    <>
      <body>
      <div className='app'>
        <h1>App de Notas</h1>
        <p>
          Crea, edita y elimina notas!
        </p>
      </div>

      <div className='form'>

        <input
          className='titulo'
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)} // Cada vez que se escriba, se actualiza el valor
        />

        <input
          className='descripcion'
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <button
          onClick={crearNota}>
          {
            editandoId ? "Actualizar nota" : "Crear nota"
          }
        </button>

      </div>

      <div className='notas'>

        {
          notas.map((nota => (

            <div className='nota' key={nota.id}>
              <h3>{nota.titulo}</h3>
              <p>{nota.descripcion}</p>

              <button
                onClick={() => editarNota(nota)}>
                Editar
              </button>
              <button
                onClick={() => eliminarNota(nota.id)}>
                Eliminar
              </button>
            </div>

          )))
        }

      </div>
      </body>
    </>
  )
}

export default App
