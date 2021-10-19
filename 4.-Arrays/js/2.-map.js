// Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    // Map(); nos creara un nuevo arreglo con los elementos que cumplan cierta condicion

    // const fullNames= inventors.map(inventor=>inventor.first+" "+inventor.last)

    const fullNames=inventors.map(iterador=>`${iterador.first} ${iterador.last}`);

    console.log(fullNames);