let tabla=[
    {nombre: 'maria', apellido: 'martinez', direccion:'calle 10'},
    {nombre: 'juan', apellido: 'perez', direccion:'calle 8'},
    {nombre: 'pedro', apellido: 'gonzales', direccion:'calle 2'}
]

const listar=()=>{

    let elemento=document.getElementById("cuerpotabla")
    let item=""

    for (let i = 0; i < tabla.length; i++) {
        item+=`<tr><td>${tabla[i].nombre}</td><td>${tabla[i].apellido}</td><td>${tabla[i].direccion}</td></tr>`  
        //item+="<tr><td>"+tabla[i].nombre+"</td><td>"+tabla[i].apellido+"</td><td>"+tabla[i].direccion+"</td></tr>"  
    }
    
    elemento.innerHTML=item
}

const registrar=()=>{
    let nomtxt=document.getElementById("nombre").value
    let apetxt=document.getElementById("apellido").value
    let dirtxt=document.getElementById("direccion").value

    if (!nomtxt) {
        alert("ingrese un nombre")
        return
    }
    
    let elemento=document.getElementById("cuerpotabla")

    elemento.innerHTML+=`<tr><td>${nomtxt}</td><td>${apetxt}</td><td>${dirtxt}</td></tr>`
    const obj={nombre:nomtxt, apellido:apetxt, direccion:dirtxt}
    tabla.push(obj)
    console.log(tabla)
}