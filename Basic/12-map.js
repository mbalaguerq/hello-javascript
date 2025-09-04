/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set (añadir o actualizar)

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get (obtener)

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has (consultar si existe)

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete (borrar)

myMap.delete("email")

console.log(myMap)

// keys, values y entries (para iterar)

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size (tamaño)

console.log(myMap.size)

// clear (limpiar)

myMap.clear()

console.log(myMap)



