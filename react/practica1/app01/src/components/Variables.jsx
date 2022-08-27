import React, { Fragment } from "react";

const Variables =()=> {

    const texto1= 'Buenas tardes';
    const texto2= 'Como estas?';
    const img= 'https://i.ytimg.com/vi/EbVahmO1oj4/mqdefault.jpg'

    return(
        <>
            <hr />
            <h2>Variables</h2>
            <h3>Variables en jsx, {texto1}, {texto2}</h3>
            <img src={img} alt="wena" />
        </>
    )
}

export default Variables