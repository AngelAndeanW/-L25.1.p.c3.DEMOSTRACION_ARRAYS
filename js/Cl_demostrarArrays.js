export default class Cl_demostrarArrays {
  ejemploCreacion() {
    let numeros = [1, 2, 3, 4, 5];
    let booleanos = [true, false, true];
    let strings = ["Hello", "World"];
    let personas = [
      { nombre: "Dessiree", edad: 39 },
      { nombre: "Jhon", edad: 44},
      { nombre: "Aidana", edad: 10},
    ];
    console.log(`
==> Tipos de datos primitivos:
numeros[2] = ${numeros[2]}
booleanos[1] = ${booleanos[1]}
strings[0] = ${strings[0]}

==> Tipos de datos objetos:        
personas[0].nombre = ${personas[0].nombre}
personas[1].edad = ${personas[1].edad}
    `);
  }

  ejemploAcceso1() {
    let numeros = [1, 2, 3, 4, 5];

    let almuerzos = [
      { nombre: "Pabellon", chef: "Jhon", ingredientes: ["Arroz", "Caraotas", "Carne Mechada", "Huevo", "Tajadas"] },
      { nombre: "Pasta Boloñesa", chef: "Dessiree", ingredientes: ["Pasta", "Tomate", "Carne Molida", "Aliños"] },
      { nombre: "Guabina", chef: "Nury", ingredientes: ["Guabina", "Aceite"] },
    ];
    console.log(`
==> Tipos de datos primitivos:
numeros[2] = ${numeros[2]}

==> Tipos de datos objetos:
Acceder al nombre del primer almuerzo
almuerzos[0].nombre = ${almuerzos[0].nombre}
Acceder al chef del segundo almuerzo
almuerzos[1].chef = ${almuerzos[1].chef}
    `);
  }

  ejemploPush() {
    let numeros = [1, 2, 3];
    console.log(`
==> Antes de push
numeros = ${numeros}
    `);
    numeros.push(4);
    console.log(`
==> Despues de push
numeros = ${numeros}
    `);
    numeros.push(5, 6);
    console.log(`
==> Despues de push
numeros = ${numeros}
    `);
  }

  ejemploUnshift() {
    let frutas = ["manzana", "banana"];
    console.log(`
==> Antes de unshift
frutas = ${frutas}
    `);
    frutas.unshift("naranja");
    console.log(`
==> Despues de frutas.unshift("naranja")
frutas = ${frutas}
    `);
    frutas.unshift("uva", "pera");
    console.log(`
==> Despues de frutas.unshift("uva", "pera")
frutas = ${frutas}
    `);
  }

  ejemploPop() {
    let numeros = [1, 2, 3, 4, 5];
    console.log(`
==> Array de números
Antes de pop
numeros = ${numeros}`);
    let ultimoNumero = numeros.pop();
    console.log(`
==> Despues de numeros.pop()
numeros = ${numeros}
El último número fue ${ultimoNumero}
    `);
    let personas = [
      { nombre: "Dessiree", edad: 39 },
      { nombre: "Jhon", edad: 44},
      { nombre: "Nury", edad: 58}
    ];
    console.log(`
==> Array de objetos
Antes de pop
personas = ${JSON.stringify(personas)}`);
    let ultimaPersona = personas.pop();
    console.log(`
==> Despues de personas.pop()
personas = ${JSON.stringify(personas)}
La persona eliminada fue ${JSON.stringify(ultimaPersona)}
    `);
  }

  ejemploShifty() {
    // Inicializando arreglo con valores numéricos básicos
    let numeros = [1, 2, 3, 4, 5];
    console.log(`
==> Array de elementos primitivos (números)
Antes de shift
numeros = ${numeros}
    `);
    let primerNumero = numeros.shift();
    console.log(`
==> Despues de numeros.shift()
numeros = ${numeros}
El primer número fue ${primerNumero}
    `);
    // Estructura de datos con objetos complejos
    let personas = [
      { nombre: "Dessiree", edad: 39 },
      { nombre: "Jhon", edad: 44},
      { nombre: "Aidana", edad: 10},
    ];
    console.log(`
==> Array de objetos
Antes de shift
personas = ${JSON.stringify(personas)}
    `);
    let primeraPersona = personas.shift();
    console.log(`
==> Despues de personas.shift()
personas = ${JSON.stringify(personas)}
La persona eliminada fue ${JSON.stringify(primeraPersona)}
    `);
  }

  ejemploSplice() {
    // Inicializando arreglo con valores numéricos básicos
    let numeros = [1, 2, 3, 4, 5];
    console.log(`
==> Array de elementos primitivos (números)
Antes de splice
numeros = ${numeros}
    `);
    let eliminados = numeros.splice(2, 2, 6, 7);
    console.log(`
==> Luego de splice
numeros = ${numeros}
Elementos eliminados: ${eliminados}
    `);
    // Estructura de datos con objetos complejos
    let personas = [
      { nombre: "Dessiree", edad: 39 },
      { nombre: "Jhon", edad: 44},
      { nombre: "Aidana", edad: 10},
      { nombre: "Nury", edad: 58},
    ];
    console.log(`
==> Array de objetos
Antes de splice
personas = ${JSON.stringify(personas)}
    `);
    eliminados = personas.splice(1, 2, { nombre: "Pedro", edad: 40 });
    console.log(`
==> Luego de splice
personas = ${JSON.stringify(personas)}
Elementos eliminados: ${JSON.stringify(eliminados)}
    `);
  }

  metodoMap1() {
    // Demostración usando datos simples
    const numeros = [1, 2, 3, 4, 5];
    const duplicados = numeros.map((num) => num * 2);
    console.log(`
==> Ejemplo con Elementos Primitivos
numeros = ${numeros}
duplicados = ${duplicados}
    `);
    // Demostración usando estructuras complejas
    const personas = [
      { nombre: "Dessiree", edad: 39 },
      { nombre: "Jhon", edad: 44},
      { nombre: "Aidana", edad: 10},
    ];
    const nombres = personas.map((persona) => persona.nombre);
    console.log(`
==> Ejemplo con Objetos
personas = ${JSON.stringify(personas)}
nombres = ${nombres}
    `);
  }

  ciclosTradicionales() {
    // Iteración usando bucle for tradicional
    let numeros = [1, 2, 3, 4, 5];
    // Recorriendo el arreglo elemento por elemento
    for (let i = 0; i < numeros.length; i++) {
      console.log(`CICLO for: numeros[${i}] = ${numeros[i]}`);
    }
    // Iteración usando bucle while
    let frutas = ["manzana", "banana", "cereza", "durazno"];
    let i = 0;
    while (i < frutas.length) {
      console.log(`CICLO while: frutas[${i}] = ${frutas[i]}`);
      i++;
    }
    // Iteración usando bucle do-while
    let arr = [1, 2, 3, 4, 5];
    i = 0;
    do {
      console.log(`CICLO do-while: arr[${i}] = ${arr[i]}`);
      i++;
    } while (i < arr.length);
  }
  metodoForEach() {
    // Datos de prueba
    const mockData = [10, 20, 30, 40, 50];
    mockData.forEach(function (item) {
      console.log(`Recorrido con función tradicional: ${item}`);
    });
    // Implementación con función flecha
    mockData.forEach((item) => console.log(`Recorrido con función flecha: ${item}`));
  }

  metodoFilter() {
    const numeros = [5, 12, 8, 130, 44];
    const mayoresQueDiez = numeros.filter((num) => num > 10);
    console.log(`
==> Ejemplo con datos primitivos
números = ${numeros}
números mayores que 10: ${mayoresQueDiez}
    `);
    const personas = [
      { nombre: "Dessiree", edad: 39 },
      { nombre: "Jhon", edad: 44},
      { nombre: "Nury", edad: 58}
    ];
    const mayoresDe18 = personas.filter((persona) => persona.edad > 18);
    console.log(`
==> Ejemplo con objetos
personas = ${JSON.stringify(personas)}
mayores de 18 = ${JSON.stringify(mayoresDe18)}
    `);
  }

  metodoSort() {
    let numeros = [10, 5, 8, 1, 7];
    console.log(`
==> Ejemplo con datos primitivos
números = ${numeros}
    `);
    numeros.sort((a, b) => a - b); // Organiza en orden ascendente
    console.log(`
==> Los números ordenados de menor a mayor
números = ${numeros}
    `);
    let palabras = ["manzana", "naranja", "banana", "kiwi"];
    console.log(`
==> Ejemplo con datos primitivos
palabras = ${palabras}
    `);
    palabras.sort(); // Ordena alfabéticamente
    console.log(`
==> Las palabras ordenadas alfabéticamente
palabras = ${palabras}
    `);
    let personas = [
      { nombre: "Angel", edad: 20 },
      { nombre: "Jhon", edad: 44 },
      { nombre: "Dessiree", edad: 39 },
    ];
    console.log(`
==> Ejemplo con objetos
personas = ${JSON.stringify(personas)}
    `);
    personas.sort((a, b) => a.edad - b.edad); // Ordena por edad de menor a mayor
    console.log(`
==> Las personas ordenadas por edad de menor a mayor
personas = ${JSON.stringify(personas)}
    `);
  }
}
// Crear una instancia de la clase para ejecutar los ejemplos
new Cl_demostrarArrays();
