/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animals = ["perro", "gato", "elefante", "tigre", "leon"];
console.log(animals);

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift("jirafa");
animals.push("hipopotamo");
console.log(animals);

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1);
console.log(animals);

// 4. Crea un set que almacene cinco libros

let myBooks = new Set(["El Quijote", "Cien Años de Soledad", "1984", "El Señor de los Anillos", "Moby Dick"]);


// 5. Añade dos más. Uno de ellos repetido

myBooks.add("Mecanoscrit del segon origen")
myBooks.add("El Quijote") //no se añade pq es repetido
console.log(myBooks);


// 6. Elimina uno concreto a tu elección

myBooks.delete("Moby Dick")
console.log(myBooks)


// 7. Crea un mapa que asocie el número del mes a su nombre

let monthsMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (monthsMap.has(5)) {
    console.log(monthsMap.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

monthsMap.set("verano", ["Junio", "Julio", "Agosto"]);
console.log(monthsMap);


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = [];                  // Creo un array buit

let mySet = new Set(myArray);      // Converteixo l’array en un Set

let myMap = new Map();             // Creo un Map
myMap.set("miSet", mySet);         // Afegeixo el Set al Map amb la clau "miSet"

console.log(myMap);                // Mostro el Map per veure què conté