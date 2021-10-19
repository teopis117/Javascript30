  // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    // la funcion filter permite filtrar los elementos de un array y generar uno nuevo con todos los elementos que customElements,plen dicha condicion

    // sentencias con varias lineas 
/*

    const fifteen= inventors.filter(function(inventor)
    {
        if(inventor.year >= 1500 && inventor.year <1600)

        {
            al retornar true nos retornara el elemento que este iterando en este caso sera el inventor
            return true;
        }
    }
    );

    */

    // hacerlo con  un arrow function
                                    // inventor es el iterador
    const fifteen=inventors.filter((inventor)=>inventor.year >=1500 && inventor.year <1600);

            // .table nos sirve para imprimir los valores en forma de tabla muy utilizado en arrays 
    console.table(fifteen);