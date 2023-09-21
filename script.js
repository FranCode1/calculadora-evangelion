//PROGRAMENLO POR SU CUENTA XD

// falta refactorizar esta parte pero en si esta terminado
// las mejoras que le haria serian poner skin1 y skin2 en un array y modificar todo de una
// tambien meter fondo y calculadora en un array para modificar todo de una

// tambien, en caso de meter mas skin y verificarlas por el nombre nomas, eso se podria con un switch case
// y asi listo


// boton de cambio de skin
const calculadora = document.querySelector('.calculadora');

const skin1 = document.querySelector('.left');
const skin2 = document.querySelector(".right");
const skinText = document.querySelector('.skin-text');

const cambiaSkin = document.querySelectorAll('.changeSkin');
const fondo = document.querySelector('.body');



cambiaSkin.forEach( boton => {
  boton.addEventListener("click", () => {
    if(skinText.innerHTML == 'SKIN 2'){
        skinText.innerHTML = 'SKIN 1';
    }else{
        skinText.innerHTML = "SKIN 2";
    }
    skin1.classList.toggle("active");
    skin2.classList.toggle("active");
    fondo.classList.toggle("skin");
    calculadora.classList.toggle("skin");
  });
});
