const datos= [
  {
    "id": 1,
    "nombre": "juan",
    "apellido":  "perez"
  },
  {
    "id": 2,
    "nombre": "maria",
    "apellido":  "rodriguez"
  },
  {
    "id": 3,
    "nombre": "miguel",
    "apellido":  "gonzales"
  }
]

const buscarDatoId=(id,callback)=>{
    const objeto=datos.find(item=>item.id===id)
    if(objeto) {
        callback(null, objeto)
    }else{
        callback("No se encontro el objeto con id=" +id)
    }
}
buscarDatoId(1,(error, objeto)=>{
    if(error) {
        return console.log(error)
    }
    console.log(objeto)
})

//asincrono

let texto= 'Hola asincrono'
setTimeout(()=>{console.log("bienvenido"), 3000})
setTimeout(function(){mifuncion(texto), 2000})

const mifuncion=(msj)=>console.log(msj)

//setinterval
setInterval(mifuncion2, 1000)
function mifuncion2(){
    let d= new Date()
    document.getElementById("reloj").innerHTML=(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())
}