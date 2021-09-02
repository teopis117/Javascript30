// cuando presionamos algo esta funcion aplicara el efecto que le demos
// El evento keydown se produce cuando se presiona una tecla.


function playsound(e)

{
    // cuando rpesionamos una tecla con el codigo que fijamos seleccionamos el audio
 const audio=this.document.querySelector(`audio[data-key="${e.keyCode}"]`);

//  en el caso que seleccionemos una tecla que no contenga ningun codigo este nos retornara un null
//  console.log(audio); 

//  ahora estamos seleccionando denuevo la tecla
 const tecla=this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
 
 if(!audio) return; //para la funcion para correr todos juntos
 audio.currentTime=0; //repetir al inicio si pulsamos otra tecla
 audio.play();
 tecla.classList.add("tocando");
 
};



function removeTransition(e)
{
   if(e.propertyName !== 'transform') return;
   this.classList.remove('tocando');
}

const teclas = document.querySelectorAll(".key");
teclas.forEach(key=>key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playsound);