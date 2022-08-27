console.log('hola');

const vector=["manazana", "papaya", "mango"];
const vector2=[];

vector2[0]="futbol";
vector2[1]="basquetball";

console.log(vector);
console.log(vector2);

const vector3= new Array("accion", "humor", "drama");
console.log(vector3); 

console.log('metodos')
console.log("ordenado: "+vector3.sort())
vector3.push("terror")
console.log("Agregar al final: "+vector3)
vector3.pop()
console.log("Eliminar al final de un vector: "+vector3)
vector3.unshift("Comedia")
console.log("Agregar al Inicio: "+vector3)
vector3.shift()
console.log("Eliminar al Inicio: "+vector3)

console.log('Objetos')

const mascota ={
    nombre: "benji",
    tipo: "perro",
    edad: "2"
}
console.log(mascota)
console.log(mascota.nombre)
console.log("Mi "+mascota.tipo+" se llama:"+ mascota.nombre)

const user={
    nombre:'juan',
    apellido:'perez',
    ubicacion:{
        pais:'colombia',
        ciudad:'barranquilla',
        direccion:'calle 13'
    },
    asignaturas:['web', 'movil', 'algoritmos'],
    msj(){
        console.log("bienvenidos")
    }
}

console.log('direccion: '+ user.ubicacion.direccion)
console.log(user.msj())
console.log(user.asignaturas[0])

//destructuring
const{nombre, apellido}=user

console.log('nombre: '+nombre+ ' ' +apellido)

//funcion declarativa

function sumar(){
    console.log(10+6)
}

sumar()
function sumar2(){
    return 10 + 20
}

const suma=sumar2()
console.log(suma)

//funciones que retornan otra funcion

function mensaje(){
    return function(){
        return 'hola mundo'
    }
}

console.log(mensaje()())

//funciones con parametros

function sumar3(num1, num2){
    console.log(num1+num2)
}

sumar3(20, 30)

//parametros por defecto

function sumar3(num1=0, num2=1){
    console.log(num1+num2)
}

sumar3(5)

//funcion flecha

const sumarf=()=> {
    console.log(10 + 3)
}

sumarf()

//1 parametros

const sumarf2=(num)=>{
    console.log(num+3)
}
sumarf2(10)

//2 parametro

const sumarf3=(num1,num2)=>{
    console.log(num1+num2)
}
sumarf3(10,7)

//2 parametros
const sumarf4=(num1,num2)=>{
    console.log((num1+num2)+(num1+num2))
}
sumarf4(10,7)


const saludar=(nom)=>('nuenos dias' +nom)
const resultado=saludar('pedro')
console.log(resultado)

//funcion expresada

const double= function(n){
    return n*2
}

console.log('El doble es:' +double(6))

//template string

const numero= (num1, num2)=>(`La suma es: ${num1+num2}`)
console.log(numero(30,60))