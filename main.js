//pantalals de la calculadora
const display = document.getElementById("display");
const resultado = document.getElementById("resultado");

//botones numericos de la calculadora
const uno = document.getElementById("1");
const dos = document.getElementById("2");
const tres = document.getElementById("3");
const cuatro = document.getElementById("4");
const cinco = document.getElementById("5");
const seis = document.getElementById("6");
const siete = document.getElementById("7");
const ocho = document.getElementById("8");
const nueve = document.getElementById("9");
const cero = document.getElementById("0");
const dobleCero = document.getElementById("00");
const point = document.getElementById(".");

//botones de operaciones
const suma = document.getElementById("+");
const resta = document.getElementById("-");
const multiplicacion = document.getElementById("X");
const division = document.getElementById("÷");
const raiz = document.getElementById("√");

//boton encendido y apagado
const on = document.getElementById("power");

const igual = document.getElementById("igual");

const energia = document.getElementById("energia");

//listeners de los botones numericos
uno.addEventListener("click", function(){
    imprimir(1);
});
dos.addEventListener("click", function(){
    imprimir(2);
});
tres.addEventListener("click", function(){
    imprimir(3);
});
cuatro.addEventListener("click", function(){
    imprimir(4);
});
cinco.addEventListener("click", function(){
    imprimir(5);
});
seis.addEventListener("click", function(){
    imprimir(6);
});
siete.addEventListener("click", function(){
    imprimir(7);
});
ocho.addEventListener("click", function(){
    imprimir(8);
});
nueve.addEventListener("click", function(){
    imprimir(9);
});
cero.addEventListener("click", function(){
    imprimir(0);
});
dobleCero.addEventListener("click", function(){
    imprimir("00");
});

//listeners de los botones de operaciones
suma.addEventListener("click", function(){
    imprimir("+");
});
resta.addEventListener("click", function(){
    imprimir("-");
});
multiplicacion.addEventListener("click", function(){
    imprimir("*");
});
division.addEventListener("click", function(){
    imprimir("/");
});
raiz.addEventListener("click", function(){
    let operacion = display.innerText;
    let resultadoOperacion = Math.sqrt(operacion);
    resultado.innerText = "Resultado:  " + resultadoOperacion;
    display.innerText = "0";
});
point.addEventListener("click", function(){
    imprimir(".");
});

power.addEventListener("click", function(){
    powerFunction();
});




//funcions para imprimir los numeros en el display
const imprimir = (numero) => {
    if(display.innerText === "0"){
        display.innerText = "";
    }
    display.innerText += numero;
}

//funcion para encender y apaagar la calculadora
const powerFunction = () => {
    if(energia.classList.contains("apagada")){
        display.innerText = "0";
        resultado.innerText = "Resultado:  0";
    }
    energia.classList.toggle("apagada");
}


igual.addEventListener("click", function(){
    let operacion = display.innerText;
    let resultadoOperacion = eval(operacion);
    resultado.innerText = "Resultado:  " + resultadoOperacion;
    display.innerText = "0";
});



c.addEventListener("click", function(){
    display.innerText = "0";
    resultado.innerText = "Resultado:  0";
});

















