// alert ("hola")
// preguntarEdadAusuario = prompt(`Cual es tu edad`)

// if (preguntarEdadAusuario >= 18)  {
//     alert (`bienvenide`)
//     alert (`puede comprar alcohol`)
// }

// else {
//     alert (`usted no puede entrar :(`)
// }


// const puedeAvanzar = (color) => {
//     if (color == 'verde' ) {
//       return true
//     }
//     else {
//       return false
//     }
//   }

// console.log (puedeAvanzar('verde'))

// console.log (puedeAvanzar('amarillo'))

// console.log (puedeAvanzar('rojo'))

// const nombre = prompt ("cual es tu nombre?")

// if (nombre !== 'Homero'){
//     alert ('Bienvenide a mi pagina')
// }


// Definí una función esParOImpar que tome un numero y r
//etorne el string par si el numero es par, o el string impar si el numero es impar
// esParOImpar(3)
// 'impar'
// esParOImpar(10)
// 'par'

// const esParOImpar = (numero) => {
// if (numero % 2==0) {
//     return "par"
// }
// else {
//     return "impar"
// }
// }

// console.log(esParOImpar(2))
// console.log(esParOImpar(3))



// Definí una función esPositivoONegativo que
// reciba como argumento un numero y devuelva el string positivo si el numero es positivo,
// o el string negativo si el numero es negativo
//  esPositivoONegativo(3)
// 'positivo'
//  esPositivoONegativo(-5)
// 'negativo'


// const esPositivoONegativo = (numero) => {
//     if (numero >= 0) {
//         return 'positivo'
//     }
//     else {
//         return 'negativo'
//     }
// }

// console.log (esPositivoONegativo(3))
// // 'positivo'
// console.log (esPositivoONegativo(-5))


// Definí una función avanzarSemaforo que reciba como argumento un 
// string colorActual y devuelva un string con el siguiente color del semáforo, 
// siguiendo el orden: verde -> amarillo -> rojo -> verde
//  avanzarSemaforo('verde')
// 'amarillo'
//  avanzarSemaforo('amarillo')
// 'rojo'
//  avanzarSemaforo('rojo')
// 'verde'


// const avanzarSemaforo =(colorActual)=> {
//     if (colorActual === "verde") 
//     {
//         return "amarillo"
//     }
//     else if (colorActual === "amarillo"){
//         return "rojo"
        
//     }
//     else {
//         return "verde"
        
//     }


// }

// console.log (avanzarSemaforo('verde'))
// console.log (avanzarSemaforo('amarillo'))
// console.log (avanzarSemaforo('rojo'))

// const edad = prompt("decime tu edad")
// const vaConlosPadres = prompt ("vas acompaniado por tus padres decime si, si no, no")

// if (edad > 18 || vaConlosPadres ==="si") {
//     alert ("puedes ver la peli (:")
// }

// else {
//    alert("no puedes ver la peli ):")
// }




Definí una función puedeVerPelicula que reciba como argumentos un número edad 
y un booleano tieneAutorizacion, y 
retorne true si la persona está habilitada 
para ver la película o false si no. 
Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
 puedeVerPelicula(12, false)
false
 puedeVerPelicula(12, true)
true
 puedeVerPelicula(16, false)
true
 puedeVerPelicula(18, true)
true
