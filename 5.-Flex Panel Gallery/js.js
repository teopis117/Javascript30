const panels=document.querySelectorAll('.panel');


function toggleOpen()
{
    // toggle nos sirve para poder ocultar o agregar una clase cuando pase algo
    this.classList.toggle('open');
}
function toggleActive(e)
{
    if(e.propertyName.includes('flex'))
    {

     this.classList.toggle('open-active');
    }

}



panels.forEach((panel)=>
{
panel.addEventListener('click',toggleOpen);
// transitionend es un evento que es activado cuando una transicion en css es ejecutado 
panel.addEventListener('transitionend',toggleActive);
});