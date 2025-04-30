import { useState } from 'react'
import Header from './components/Header.jsx'
import Formulario from './components/Formulario.jsx'
import ListadoCitas from './components/ListadoCitas.jsx'
import './App.css'

function App() {
  const [citas, setCitas] = useState([])

  function agregarCita(cita) {
    setCitas([...citas, cita])
  }

  function eliminarCita(id) {
    const nuevasCitas = citas.filter((cita) => cita.id !== id)
    setCitas(nuevasCitas)
  }

  return (
    <>
      <Header />
      <div className="contenedor">
        <Formulario agregarCita={agregarCita} />
        <ListadoCitas citas={citas} eliminarCita={eliminarCita} />
      </div>
    </>
  )
}

export default App
