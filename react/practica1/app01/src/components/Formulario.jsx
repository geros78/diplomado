import React from 'react'

const Formulario = () => {

    const[nombre,setNombre]=React.useState('')
    const[apellido,setApellido]=React.useState('')
    const[lista,setLista]=React.useState([])

    const guardarDatos=(e)=>{
        e.preventDefault() //prevenir el comportamiendo del metodo
        console.log('registrando: '+nombre+' '+apellido)
        //guardar lista
        setLista(
            [
                    ...lista,
                    {nombre:nombre,apellido:apellido}
            ]
        )
        setNombre('')
        setApellido('')
    }

  return (
    <div>
        <hr />
        <h2>Formulario de registro</h2>
        <form onSubmit={guardarDatos}>
            <input type="text" placeholder='Ingrese Nombre' className='form-control m-3' onChange={(e)=>setNombre(e.target.value)}/>
            <input type="text" placeholder='Ingrese Apellido' className='form-control m-3' onChange={(e)=>setApellido(e.target.value)}/>
            <div className='d-grid gap2'>
                <button type='submit' className='m-3 btn btn-outline-primary'>Registrar</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario