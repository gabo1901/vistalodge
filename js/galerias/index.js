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

        if(alturaAnimado + 170 < scrollTop){
            animado[i].style.opacity = "1";
            animado[i].classList.add("animados")

        }
    }
}
window.addEventListener("scroll", mostrarScroll);



// ****************************************** Galería *********************************

// Variables

const btnCierra = document.querySelector(".btn-cierra");
const btnAdelanta = document.querySelector(".btn-adelanta");
const btnRetrocede = document.querySelector(".btn-retrocede");
const imagenes = document.querySelectorAll(".containegalery img");
const lightbox = document.querySelector(".contenedor-principal");
const imagenActiva = document.querySelector(".imagen-activa");
var indiceImagen = 0;

// Abre LightBox

const abreLightBox = (e) =>{
    imagenActiva.src = e.target.src;
    lightbox.style.display = "flex"
    indiceImagen = Array.from(imagenes).indexOf(e.target);
}

imagenes.forEach((imagen)=>{
    imagen.addEventListener('click', abreLightBox);
});

// Cierre LightBox

btnCierra.addEventListener('click', ()=>{
    lightbox.style.display = "none";
})

// Adelanta la Imagen

const adelantaImagen = ()=>{

    if(indiceImagen === imagenes.length - 1){
        indiceImagen = -1
    }
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);

//Retrocede la imagen

const retrocedeImagen = ()=>{
    if(indiceImagen === 0){
        indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;
}
btnRetrocede.addEventListener('click', retrocedeImagen);





// ------------------------------ Galería Dos

const btnCierraDos = document.querySelector(".btn2-cierra");
const btnAdelantaDos = document.querySelector(".btn2-adelanta");
const btnRetrocedeDos = document.querySelector(".btn2-retrocede");
const imagenesDos = document.querySelectorAll(".containegaleryDos img");
const lightboxDos = document.querySelector(".contenedor-principal2");
const imagenActivaDos = document.querySelector(".imagen-activa2");
var indiceImagenDos = 0;

// Abre LightBox

const abreLightBoxDos = (e) =>{
    imagenActivaDos.src = e.target.src;
    lightboxDos.style.display = "flex"
    indiceImagenDos = Array.from(imagenesDos).indexOf(e.target);
}

imagenesDos.forEach((imagen)=>{
    imagen.addEventListener('click', abreLightBoxDos);
});

// Cierre LightBox

btnCierraDos.addEventListener('click', ()=>{
    lightboxDos.style.display = "none";
})

// Adelanta la Imagen

const adelantaImagenDos = ()=>{

    if(indiceImagenDos === imagenesDos.length - 1){
        indiceImagenDos = -1
    }
    imagenActivaDos.src = imagenesDos[indiceImagenDos + 1].src;
    indiceImagenDos++;
};

btnAdelantaDos.addEventListener('click', adelantaImagenDos);

//Retrocede la imagen

const retrocedeImagenDos = ()=>{
    if(indiceImagen === 0){
        indiceImagen = imagenes.length;
    }
    imagenActivaDos.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;
}
btnRetrocedeDos.addEventListener('click', retrocedeImagenDos);