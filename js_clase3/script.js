const datos = [{
    "id": 1,
    "nombre": "juan",
    "apellido": "perez"
},
{
    "id": 2,
    "nombre": "maria",
    "apellido": "rodriguez"
},
{
    "id": 3,
    "nombre": "miguel",
    "apellido": "gonzales"
}]


/*   const buscarDatoIgual=(id)=>{
       const objeto=datos.find(
           (item)=>item.id==id
       )
       return new Promise((resolve,reject)=>{
           if(objeto){
               resolve(objeto)
           }else{
               reject('No se encontro el objeto con id: '+id)
           }
       })
   } 
*/

const buscarDatoIgual = (id) => {
    const objeto = datos.find(
        (item) => item.id == id
    )
    return new Promise((resolve, reject) => {
        objeto ? resolve(objeto) : reject('No se encontro el objeto con id: ' + id)
    })
}

buscarDatoIgual(3)
    .then((objeto) => console.log(objeto))
    .catch((error) => console.log(error))

//fetch

const url = 'https://jsonplaceholder.typicode.com/posts'
fetch(url)

    .then((res) => res.json())
    .then((datos) => {
        console.log(datos)
        datos.map((elementos) => console.log(elemento.id + ' ' + elementos.title))
    })
    .catch((e) => console.log(e))

//async - await
const buscarDato = async () => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        data.forEach(element => console.log('Id: ' + element.id + ' title: ' + element.title));

    } catch (error) {
        console.log(error)
    }
}

buscarDato()

const buscarDatoId =async(id) => {
    try{
        const res= await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        const data= await res.json()
        console.log('Id: '+ data.id+' '+data.title)
    } catch(error){
        console.log(error)
    }
}
buscarDatoId(15)

//map
const numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doble = numeros.map ((elemento)=>elemento*2);
console.log(doble);