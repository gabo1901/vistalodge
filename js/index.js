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
var actualPosicion = 0,
    scrollAmount = 390;

    var horizon = document.querySelector('.horizontal-scroll');
    var comentarios = document.querySelector('.comentarios');

    var arrowLeft = document.querySelector('.fa-angle-left');
    var arrowRight = document.querySelector('.fa-angle-right');

    let maxScroll = -comentarios.offsetWidth + horizon.offsetWidth;

    
function scrollHorizontaly(val) {
    actualPosicion += (val * scrollAmount);

    if(actualPosicion > 0){
        actualPosicion = 0
    }
    if(actualPosicion < maxScroll){
        actualPosicion = maxScroll;
    }

    comentarios.style.left = actualPosicion +'px';
}; 

 var animado = document.querySelectorAll(".animado")
 
 function mostrarScroll(){
     var scrollTop = document.documentElement.scrollTop;

     for(var i=0; i < animado.length; i++) {

        var alturaAnimado = animado[i].offsetTop;

         if(alturaAnimado -400 < scrollTop){
             animado[i].style.opacity = "1"; 
             animado[i].classList.add("animados")

         }
     }
 }
window.addEventListener("scroll", mostrarScroll);




const btnCierra = document.querySelector(".btn-cierra");
const imagenes = document.querySelectorAll(".habita1 img");
const lightbox = document.querySelector(".contenedor-principal");
const imagenActiva = document.querySelector(".imagen-activa");
var indiceImagen = 0;

// Abre LightHouse

const abreLightBox = (e) =>{
    imagenActiva.src = e.target.src;
    lightbox.style.display = "flex"
    indiceImagen = Array.from(imagenes).indexOf(e.target);
}

imagenes.forEach((imagen)=>{
    imagen.addEventListener('click', abreLightBox);
});

// Cierre LightHouse

btnCierra.addEventListener('click', ()=>{
    lightbox.style.display = "none";
})



// **************************** Habitación Dos *************************

const btnCierra2 = document.querySelector(".btn2-cierra");
const imagenes2 = document.querySelectorAll(".habita2 img");
const lightbox2 = document.querySelector(".contenedor-principal2");
const imagenActiva2 = document.querySelector(".imagen-activa2");
var indiceImagen2 = 0;

// Abre LightHouse

const abreLightBox2 = (e) =>{
    imagenActiva2.src = e.target.src;
    lightbox2.style.display = "flex"
    indiceImagen2 = Array.from(imagenes2).indexOf(e.target);
}

imagenes2.forEach((imagen)=>{
    imagen.addEventListener('click', abreLightBox2);
});

// Cierre LightHouse

btnCierra2.addEventListener('click', ()=>{
    lightbox2.style.display = "none";
})

// **************************** Habitación Tres *************************

const btnCierra3 = document.querySelector(".btn3-cierra");
const imagenes3 = document.querySelectorAll(".habita3 img");
const lightbox3 = document.querySelector(".contenedor-principal3");
const imagenActiva3 = document.querySelector(".imagen-activa3");
var indiceImagen3 = 0;

// Abre LightHouse

const abreLightBox3 = (e) =>{
    imagenActiva3.src = e.target.src;
    lightbox3.style.display = "flex"
    indiceImagen3 = Array.from(imagenes3).indexOf(e.target);
}

imagenes3.forEach((imagen)=>{
    imagen.addEventListener('click', abreLightBox3);
});

// Cierre LightHouse

btnCierra3.addEventListener('click', ()=>{
    lightbox3.style.display = "none";
})