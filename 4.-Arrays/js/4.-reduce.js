 // Array.prototype.reduce()
    // retornara la suma de elementos en una coleccion en este caso un arreglo   
 // 4. How many years did all the inventors live all together?

                                // total=variable a guardar la iteracion
                                // inventor es el iterador
 const total=inventors.reduce((total,inventor)=>
 {
     return total+(inventor.passed-inventor.year);
    // el 0 es de donde comenzara la suma
    },0);

    console.log(total);

