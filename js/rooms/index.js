"use strict"

var mensaje = document.querySelector(".mensaje");
var cta = document.querySelector(".cta")

function mostrar(){
    document.querySelector(".mensaje").style.opacity = "1";
}

function ocultar(){
    document.querySelector(".mensaje").style.opacity = "0";
}

function boton(){
    var mensaje = document.querySelector(".mensaje");

    if(mensaje.style.opacity == "0"){
           mostrar(); 
           mensaje.style.bottom = "140px"
    }
    else{
        ocultar();
        mensaje.style.bottom = "40px"
    }
}


 var animado = document.querySelectorAll(".animado")
 function mostrarScroll(){
     var scrollTop = document.documentElement.scrollTop;

     for(var i=0; i < animado.length; i++) {

        var alturaAnimado = animado[i].offsetTop;

         if(alturaAnimado + 400 < scrollTop){
             animado[i].style.opacity = "1";
             animado[i].classList.add("animados")

         }
     }
 }
window.addEventListener("scroll", mostrarScroll);