import React, {useState} from 'react'

const Estado = () => {
    const [texto, setTexto]=useState('Texto inicial desde estado')

    const cambiar=()=>{
        setTexto('Texto cambiado de estado')
    }

  return (
    <div>
        <hr />
        <h2>Estado</h2>
        <h3>{texto}</h3>
        <button onClick={()=>cambiar()}>Cambiar texto</button>
    </div>
  )
}

export default Estado