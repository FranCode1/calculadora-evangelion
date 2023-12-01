// const pantalla = document.querySelector(".pantalla");
// const botones = document.querySelectorAll('input');

// v0

// botones.forEach(boton =>{
//     boton.onclick = () => {
//         if (boton.id == 'eliminar') {
//             pantalla.textContent = '';
//         }else if(boton.id == 'borrar'){
//             pantalla.textContent = pantalla.textContent.slice(0, -1)
//         }else if(pantalla.textContent != '' && boton.id == '='){
//             pantalla.textContent = eval(pantalla.textContent);
//         }else if(pantalla.textContent == '' && boton.id == '='){
//             pantalla.textContent = 'Vacio!';
//             setTimeout(()=>(pantalla.textContent = ''), 2000);
//         }else{
//             pantalla.textContent += boton.id;
//         }
//     }
    
// })


// v1
// botones.forEach((boton)=>{
//     boton.addEventListener('click',()=>{
//         if (boton.id === '=') {
//             pantalla.value = eval(pantalla.value);
//         }else if(boton.id === 'eliminar'){
//             pantalla.value = '';
//         }else if(boton.id == 'borrar'){
//             pantalla.value = pantalla.value.slice(0, -1);
//         }else{
//             pantalla.value += boton.id;
//         }
//     })
// })

// v2
// botones.forEach((boton) => {
//   boton.addEventListener("click", () => {
//     if (boton.id === "=") {
//       pantalla.textContent = eval(pantalla.textContent);
//     } else if (boton.id === "eliminar") {
//       pantalla.textContent = "";
//     } else if (boton.id == "borrar") {
//       pantalla.textContent = pantalla.textContent.slice(0, -1);
//     } else {
//       pantalla.textContent += boton.id;
//     }
//   });
// });

// v3
// botones.forEach(boton => {
//   boton.onclick = () => {
//     if (boton.id === "=") {
//       pantalla.textContent = eval(pantalla.textContent);
//     } else if (boton.id === "eliminar") {
//       pantalla.textContent = "";
//     } else if (boton.id == "borrar") {
//       pantalla.textContent = pantalla.textContent.slice(0, -1);
//     } else {
//       pantalla.textContent += boton.id;
//     }
//   }
// });

// v4
// botones.forEach((boton) => {
//   boton.addEventListener('click', () => {
//     switch (boton.id) {
//       case 'eliminar':
//         pantalla.textContent = '';
//         break;
//       case 'borrar':
//         pantalla.textContent = pantalla.textContent.slice(0, -1);
//         break;
//       case '=':
//         if (pantalla.textContent !== '') {
//           try {
//             pantalla.textContent = eval(pantalla.textContent);
//           } catch (error) {
//             pantalla.textContent = 'Error';
//             setTimeout(() => (pantalla.textContent = ''), 2000);
//           }
//         } else {
//           pantalla.textContent = 'Vacio!';
//           setTimeout(() => (pantalla.textContent = ''), 2000);
//         }
//         break;
//       default:
//         pantalla.textContent += boton.id;
//     }
//   });
// });




























// v5
// Variables
// const displayValorAnterior = document.getElementById('valor-anterior');
// const displayValorActual = document.getElementById('valor-actual');
// const botonesNumeros = document.querySelectorAll('.numero');
// const botonesOperadores = document.querySelectorAll('.operador');


// botonesNumeros.forEach(boton => {
//     boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
// });

// botonesOperadores.forEach(boton => {
//     boton.addEventListener('click', () => display.computar(boton.value))
// });

// Clases
// class Display {
//     constructor(displayValorAnterior, displayValorActual) {
//         this.displayValorActual = displayValorActual;
//         this.displayValorAnterior = displayValorAnterior;
//         this.calculador = new Calculadora();
//         this.tipoOperacion = undefined;
//         this.valorActual = '';
//         this.valorAnterior = '';
//         this.signos = {
//             sumar: '+',
//             dividir: '%',
//             multiplicar: 'x',
//             restar: '-', 
//         }
//     }

//     borrar() {
//         this.valorActual = this.valorActual.toString().slice(0,-1);
//         this.imprimirValores();
//     }

//     borrarTodo() {
//         this.valorActual = '';
//         this.valorAnterior = '';
//         this.tipoOperacion = undefined;
//         this.imprimirValores();
//     }

//     computar(tipo) {
//         this.tipoOperacion !== 'igual' && this.calcular();
//         this.tipoOperacion = tipo;
//         this.valorAnterior = this.valorActual || this.valorAnterior;
//         this.valorActual = '';
//         this.imprimirValores();
//     }

//     agregarNumero(numero) {
//         if(numero === '.' && this.valorActual.includes('.')) return
//         this.valorActual = this.valorActual.toString() + numero.toString();
//         this.imprimirValores();
//     }

//     imprimirValores() {
//         this.displayValorActual.textContent = this.valorActual;
//         this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
//     }

//     calcular() {
//         const valorAnterior = parseFloat(this.valorAnterior);
//         const valorActual = parseFloat(this.valorActual);

//         if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
//         this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
//     }
// }

// class Calculadora {
//     sumar(num1, num2) {
//         return num1 + num2;
//     }

//     restar(num1, num2) {
//         return num1 - num2;
//     }

//     dividir(num1, num2) {
//         return num1 / num2;
//     }

//     multiplicar(num1, num2) {
//         return num1 * num2;
//     }
// } 

// const display = new Display(displayValorAnterior, displayValorActual);


















// v6

// Clase Calculadora
class Calculadora {
  constructor(valorAnterior, valorActual) {
    this.valorAnterior = valorAnterior;
    this.valorActual = valorActual;
    this.eliminar();
  }

  eliminar() {
    this.numViejo = 0;
    this.numNuevo = 0;
    this.operador = "";
    // this.tipoOperacion = undefined;
    this.actualizar();
  }

  actualizar() {
    this.valorAnterior.innerHTML = this.numViejo + this.operador;
    this.valorActual.innerHTML = this.numNuevo;
  }

  agregarNumero(numero) {
    if (numero === "." && this.numNuevo.includes(".")) return;
    this.numNuevo =
      this.numNuevo === 0 ? numero : this.numNuevo.toString() + numero;
    this.actualizar();
  }

  borrar() {
    if (this.numNuevo === 0) return;
    this.numNuevo = +this.numNuevo.toString().slice(0, -1);
    this.actualizar();
  }

  operacion(operador) {
    if (this.operador) {
      this.calcular();
    }
    this.operador = operador;
    this.numViejo = +this.numNuevo === 0 ? this.numViejo : this.numNuevo;
    this.numNuevo = 0;
    this.actualizar();
  }

  // computar(tipo) {
  //     this.tipoOperacion !== '=' && this.calcular();
  //     this.tipoOperacion = tipo;
  //     this.numViejo = this.numNuevo || this.numViejo;
  //     this.numNuevo = '0';
  //     this.actualizar();
  // }

  calcular() {
    // const numeroViejo = parseFloat(this.numViejo);
    // const numeroNuevo = parseFloat(this.numNuevo);

    // if (isNaN(numeroNuevo) || isNaN(numeroViejo)) {
    //    return this.numeroNuevo = this.calculador[this.tipoOperacion]( numeroViejo, numeroNuevo );
    // }

    switch (this.operador) {
      case "+":
        this.numViejo = +this.numViejo + +this.numNuevo;
        // this.numViejo += this.numNuevo;
        break;
      case "-":
        this.numViejo = +this.numViejo - +this.numNuevo;
        break;
      case "*":
        this.numViejo = +this.numViejo * +this.numNuevo;
        break;
      case "/":
        this.numViejo = +this.numViejo / +this.numNuevo;
        break;
      case "%":
        this.numViejo = +this.numViejo % +this.numNuevo;
        break;
      case "**":
        this.numViejo = this.numViejo ** +this.numNuevo;
        break;
      // lo que se puede hacer tambien es agregar el caso para los botones de borrar, eliminar y igual para que llamen a la funcion
      // y no haga falta hacerles una varible y evento a cada una, adjuntar ejemplo,(A esta parte nueva le puedo agregar el codigode la v4)
      // case 'C':
      //     this.numViejo = 0;
      //     this.numNuevo = 0;
      //     this.operador = "";
      //     this.actualizar();
      //   break;
      // case 'CE':
      //   if (this.numNuevo === 0) return;
      //       this.numNuevo = +this.numNuevo.toString().slice(0, -1);
      //       this.actualizar();
      //   break;
      case '=':
        if (this.numNuevo === 0 && this.numViejo === 0) {
          this.numNuevo = "Vacio!";
          this.operador = "";
          this.numNuevo = 0;
          setTimeout(this.actualizar(), 2000);
        }
        // if (this.numNuevo !== '0' && this.numViejo !== '0') {
        //   try {
        //     calculadoraFachera.calcular();
        //   } catch (error) {
        //     this.numNuevo = "Error";
        //     setTimeout(() => (this.numNuevo = 0), 2000);
        //   }
        // }
        break;
    }
    // agregar el case '=' donde ponga lo del Vacio!
    this.operador = "";
    this.numNuevo = 0;
    this.actualizar();
  }
}

// Variables contenedoras de los botones
const valorAnterior = document.querySelector('[valor-anterior]');
const valorActual = document.querySelector("[valor-actual]");

const numeros = document.querySelectorAll("[numero]");
const operadores = document.querySelectorAll("[operador]");

const eliminar = document.querySelector("[eliminar]");
const borrar = document.querySelector('[borrar]');
const igual = document.querySelector('[igual]');

// Objeto calculadora
const calculadoraFachera = new Calculadora(valorAnterior, valorActual);

// Funciones de los botones
numeros.forEach(boton => {
  boton.addEventListener("click", () => {
    calculadoraFachera.agregarNumero(boton.innerHTML);
  });
});

operadores.forEach(boton => {
  boton.addEventListener('click', ()=>{
    calculadoraFachera.operacion(boton.innerHTML);
  });
});

eliminar.addEventListener("click", () =>{
  calculadoraFachera.eliminar();
})

borrar.addEventListener('click', () => {
  calculadoraFachera.borrar();
})

igual.addEventListener('click', ()=>{
  calculadoraFachera.calcular();
})


// falta refactorizar esta parte pero en si esta terminado
// las mejoras que le haria serian poner skin1 y skin2 en un array y modificar todo de una
// tambien meter fondo y calculadora en un array para modificar todo de una

// tambien, en caso de meter mas skin y verificarlas por el nombre nomas, eso se podria con un switch case
// y asi listo

// esto se soluciona facil con un bucle para que detecte que tipo de skin es y asi es mas facil


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
