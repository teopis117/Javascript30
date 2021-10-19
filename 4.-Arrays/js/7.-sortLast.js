// / 7. sort Exercise
    // Sort the people alphabetically by last name



    const apellido=inventors.sort(function(a,b)
    {
        if(a.last > b.last)
        {
            return 1;
        }

        else
        {
            return -1;
        }


    });

    console.log(apellido);