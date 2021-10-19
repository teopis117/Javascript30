// Array.prototype.sort()
    /*
    
        nos sirve para poder ordenar los vales de una matriz y tambien poder ordenar las cadenas 
    
    */    
// 3. Sort the inventors by birthdate, oldest to youngest
                                    // a,b son los elementos que vamos a comparar
const order= inventors.sort(function(a,b)
{

if(a.year>b.year)
{
    // si a.year es mayor que b
    return 1;
}
else
{
    // si a es menor que b
    return -1;
}
});

console.log("metodo sort-ordenamiento por año");
console.log(order);
    

const orderName=inventors.sort(function(a,b)
{

    if(a.first > b.first)
    {
        return 1;
    }

    else
    {
        return -1;
    }

});

console.log("metodo sort-ordenamiento por nombre");
console.log(order);