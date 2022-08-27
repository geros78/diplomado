import React from "react";

const Evento=()=> {

    const click=()=>{
        console.log('Hiciste click')
    }

    return (
        <div>
            <hr />
            <h2>Evento</h2>
            <button className="m-3 btn btn-outline-info" onClick={()=>click()}>Haz Click!</button>
        </div>
    )
}

export default Evento

