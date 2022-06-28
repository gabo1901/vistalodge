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

var body = document.body;

var lastScroll = 0;

window.addEventListener("scroll", () => {
    var currentScroll = window.pageYOffset
    
    if(currentScroll <= 0){
        body.classList.remove("scroll-up")
    }
    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;

})
function botonTres(){
    document.querySelector(".galerias").style.opacity = "1";
    document.querySelector(".galeriasAtrac").style.opacity = "0";
    document.querySelector(".hotel").style.borderBottom = "2px solid #FF7C00";
    document.querySelector(".atrac").style.borderBottom = "0px solid #FF7C00";
    document.querySelector(".galerias").style.zIndex = "900";
    document.querySelector(".galeriasAtrac").style.zIndex = "0";
}
function botonCuatro(){
    document.querySelector(".galerias").style.opacity = "0";
    document.querySelector(".galeriasAtrac").style.opacity = "1";
    document.querySelector(".hotel").style.borderBottom = "0px solid #ff7b0000";
    document.querySelector(".atrac").style.borderBottom = "2px solid #FF7C00";
    document.querySelector(".galeriasAtrac").style.zIndex = "900";
    document.querySelector(".galerias").style.zIndex = "0";
}
var animado = document.querySelectorAll(".animado")
function mostrarScroll(){
    var scrollTop = document.documentElement.scrollTop;

    for(var i=0; i < animado.length; i++) {

       var alturaAnimado = animado[i].offsetTop;

        if(alturaAnimado + 100 < scrollTop){
            animado[i].style.opacity = "1";
            animado[i].classList.add("animados")

        }
    }
}
window.addEventListener("scroll", mostrarScroll);