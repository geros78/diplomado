import React from 'react'

const Contador =()=> {
    const [contador, setContador]=React.useState(0)

    const aumentar=()=>{
        setContador(contador+1)
    }
    const disminuir=()=>{
        setContador(contador-1)
    }

  return (
    <div>
        <hr />
        <h2>Contador</h2>
        <h3>Ejemplo contador</h3>
        <h4>Contador: {contador}</h4>
        <h5>{contador%2==0 ? 'Es par': 'Es impar'}</h5>
        <button onClick={()=>aumentar()} className="m-2 btn btn-outline-primary">Aumentar</button>
        <button onClick={()=>disminuir()} className="m-2 btn btn-outline-danger">Disminuir</button>
    </div>
  )
}

export default Contador