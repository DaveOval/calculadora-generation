(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const style="",display=document.getElementById("display"),resultado=document.getElementById("resultado"),uno=document.getElementById("1"),dos=document.getElementById("2"),tres=document.getElementById("3"),cuatro=document.getElementById("4"),cinco=document.getElementById("5"),seis=document.getElementById("6"),siete=document.getElementById("7"),ocho=document.getElementById("8"),nueve=document.getElementById("9"),cero=document.getElementById("0"),dobleCero=document.getElementById("00"),point=document.getElementById("."),suma=document.getElementById("+"),resta=document.getElementById("-"),multiplicacion=document.getElementById("X"),division=document.getElementById("÷"),raiz=document.getElementById("√");document.getElementById("power");const igual=document.getElementById("igual"),energia=document.getElementById("energia");uno.addEventListener("click",function(){imprimir(1)});dos.addEventListener("click",function(){imprimir(2)});tres.addEventListener("click",function(){imprimir(3)});cuatro.addEventListener("click",function(){imprimir(4)});cinco.addEventListener("click",function(){imprimir(5)});seis.addEventListener("click",function(){imprimir(6)});siete.addEventListener("click",function(){imprimir(7)});ocho.addEventListener("click",function(){imprimir(8)});nueve.addEventListener("click",function(){imprimir(9)});cero.addEventListener("click",function(){imprimir(0)});dobleCero.addEventListener("click",function(){imprimir("00")});suma.addEventListener("click",function(){imprimir("+")});resta.addEventListener("click",function(){imprimir("-")});multiplicacion.addEventListener("click",function(){imprimir("*")});division.addEventListener("click",function(){imprimir("/")});raiz.addEventListener("click",function(){let i=display.innerText,n=Math.sqrt(i);resultado.innerText="Resultado:  "+n,display.innerText="0"});point.addEventListener("click",function(){imprimir(".")});power.addEventListener("click",function(){powerFunction()});const imprimir=i=>{display.innerText==="0"&&(display.innerText=""),display.innerText+=i},powerFunction=()=>{energia.classList.contains("apagada")&&(display.innerText="0",resultado.innerText="Resultado:  0"),energia.classList.toggle("apagada")};igual.addEventListener("click",function(){let operacion=display.innerText,resultadoOperacion=eval(operacion);resultado.innerText="Resultado:  "+resultadoOperacion,display.innerText="0"});c.addEventListener("click",function(){display.innerText="0",resultado.innerText="Resultado:  0"});
