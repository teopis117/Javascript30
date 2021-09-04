const segundero=document.querySelector('.segundos');
const minutero=document.querySelector('.minutos');
const horero=document.querySelector('.horas');
function colocarFecha()
{
    // el objeto de Date() nos ofrece una gran variedad de metodos respecto a fehcas,horas,seg,etc
    const ahora= new Date();
    // con estas variables guardaremos los valres de la hora en segundos,minutos y hora
    const segundos=ahora.getSeconds();
    const minutos=ahora.getMinutes();
    const horas=ahora.getHours();

    // hacemos la conversion para que podamos obtener el movimiento en las manecillas
    const segundosGrados=((segundos/60)*360)+90;
    const minutosgrados=((minutos/60)*360)+90;
    const horasgrados=((horas/60)*360)+90;
    segundero.style.transform= `rotate(${segundosGrados}deg)`;
    minutero.style.transform=`rotate(${minutosgrados}deg)`;

    horero.style.transform=`rotate{${horasgrados}deg}`;
}

// con set interval nos ejecutara esta funcion cada 1000  milisegundos
setInterval(colocarFecha,1000);