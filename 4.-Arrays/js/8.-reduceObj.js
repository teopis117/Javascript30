 // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];


    const transport=data.reduce(function(obj,item)
    {

    obj[item]++;
        console.log(item);
        return obj;
    },
    {});