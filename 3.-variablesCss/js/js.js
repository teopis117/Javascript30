const inputs=document.querySelectorAll('.controls input');

function actualizar()
{
    // con esto estaremos colocando el sufijo de px en el documento
const suffix=this.dataset.sizing || '';

// el objeti de document element colocaremos los valores que necesitemos al mover el input
document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

// haremos un foreach para recorrer  los inputs y cuando estos cambien de valor  utilizaremos la funcion actualizar
inputs.forEach(input=>input.addEventListener('change',actualizar));
inputs.forEach(input=>input.addEventListener('mousemove',actualizar));