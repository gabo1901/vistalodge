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

         if(alturaAnimado + 190 < scrollTop){
             animado[i].style.opacity = "1"; 
             animado[i].classList.add("animados")

         }
     }
 }
window.addEventListener("scroll", mostrarScroll);

// Galería

// Variables

const btnCierra = document.querySelector(".btn-cierra");

const btnAdelanta = document.querySelector(".btn-adelanta");

const btnRetrocede = document.querySelector(".btn-retrocede");

const imagenes = document.querySelectorAll(".cuartos img");

const lightbox = document.querySelector(".contenedor-principal");

const imagenActiva = document.querySelector(".imagen-activa");

const btnAbre = document.querySelector(".btnUno")


var indiceImagen = 0;

// Cuarto Uno

const imagenActiva1 = document.querySelector(".imagen-activa1");

const imagenes1 = document.querySelectorAll(".cuartos1 img");

const btnAdelanta1 = document.querySelector(".btn-adelanta1");

const lightbox1 = document.querySelector(".contenedor-principal1");

const btnCierra1 = document.querySelector(".btn-cierra1");

const btnRetrocede1 = document.querySelector(".btn-retrocede1");

const btnAbre1 = document.querySelector(".btn1")

var indiceImagen1 = 0;


// Cuarto Dos

const imagenActiva2 = document.querySelector(".imagen-activa2");

const imagenes2 = document.querySelectorAll(".cuartos2 img");

const btnAdelanta2 = document.querySelector(".btn-adelanta2");

const lightbox2 = document.querySelector(".contenedor-principal2");

const btnCierra2 = document.querySelector(".btn-cierra2");

const btnRetrocede2 = document.querySelector(".btn-retrocede2");

const btnAbre2 = document.querySelector(".btn2")

var indiceImagen2 = 0;

// Cuarto Tres

const imagenActiva3 = document.querySelector(".imagen-activa3");

const imagenes3 = document.querySelectorAll(".cuartos3 img");

const btnAdelanta3 = document.querySelector(".btn-adelanta3");

const lightbox3 = document.querySelector(".contenedor-principal3");

const btnCierra3 = document.querySelector(".btn-cierra3");

const btnRetrocede3 = document.querySelector(".btn-retrocede3");

const btnAbre3 = document.querySelector(".btn3")

var indiceImagen3 = 0;

// Cuarto Cuatro

const imagenActiva4 = document.querySelector(".imagen-activa4");

const imagenes4 = document.querySelectorAll(".cuartos4 img");

const btnAdelanta4 = document.querySelector(".btn-adelanta4");

const lightbox4 = document.querySelector(".contenedor-principal4");

const btnCierra4 = document.querySelector(".btn-cierra4");

const btnRetrocede4 = document.querySelector(".btn-retrocede4");

const btnAbre4 = document.querySelector(".btn4")

var indiceImagen4 = 0;

// Cuarto Cinco

const imagenActiva5 = document.querySelector(".imagen-activa5");

const imagenes5 = document.querySelectorAll(".cuartos5 img");

const btnAdelanta5 = document.querySelector(".btn-adelanta5");

const lightbox5 = document.querySelector(".contenedor-principal5");

const btnCierra5 = document.querySelector(".btn-cierra5");

const btnRetrocede5 = document.querySelector(".btn-retrocede5");

const btnAbre5 = document.querySelector(".btn5")

var indiceImagen5 = 0;

// Cuarto Seis

const imagenActiva6 = document.querySelector(".imagen-activa6");

const imagenes6 = document.querySelectorAll(".cuartos6 img");

const btnAdelanta6 = document.querySelector(".btn-adelanta6");

const lightbox6 = document.querySelector(".contenedor-principal6");

const btnCierra6 = document.querySelector(".btn-cierra6");

const btnRetrocede6 = document.querySelector(".btn-retrocede6");

const btnAbre6 = document.querySelector(".btn6")

var indiceImagen6 = 0;

// ----------------------------------- Abre LightHouse --------------------------------

const abreLightBox = (e) =>{
    imagenActiva.src = e.target.src;
    lightbox.style.display = "flex"
    indiceImagen = Array.from(imagenes).indexOf(e.target);
}

imagenes.forEach((imagen)=>{
    imagen.addEventListener('click', abreLightBox);
});

btnAbre.addEventListener('click', lightboxAbre);

function lightboxAbre(){
    lightbox.style.display = "flex";
}

// -------------------------------------- Cuarto 1 Abre -----------------------------------------------

const abreLightBox1 = (e) =>{
    imagenActiva1.src = e.target.src;
    lightbox1.style.display = "flex"
    indiceImagen1 = Array.from(imagenes1).indexOf(e.target);
}

imagenes1.forEach((imagen)=>{
   imagen.addEventListener('click', abreLightBox1);
});

btnAbre1.addEventListener('click', lightboxAbre1);

function lightboxAbre1(){
    lightbox1.style.display = "flex";
}

// -------------------------------------- Cuarto 2 Abre ----------------------------------------------------

    const abreLightBox2 = (e) =>{
     imagenActiva2.src = e.target.src;
     lightbox2.style.display = "flex"
     indiceImagen2 = Array.from(imagenes2).indexOf(e.target);
}

imagenes2.forEach((imagen)=>{
    imagen.addEventListener('click', abreLightBox2);
});

btnAbre2.addEventListener('click', lightboxAbre2);

function lightboxAbre2(){
    lightbox2.style.display = "flex";
}

// -------------------------------------- Cuarto 3 Abre ----------------------------------------------------

const abreLightBox3 = (e) =>{
    imagenActiva3.src = e.target.src;
    lightbox3.style.display = "flex"
    indiceImagen3 = Array.from(imagenes3).indexOf(e.target);
}

imagenes3.forEach((imagen)=>{
   imagen.addEventListener('click', abreLightBox3);
});

btnAbre3.addEventListener('click', lightboxAbre3);

function lightboxAbre3(){
    lightbox3.style.display = "flex";
}

// -------------------------------------- Cuarto 4 Abre ----------------------------------------------------

const abreLightBox4 = (e) =>{
    imagenActiva4.src = e.target.src;
    lightbox4.style.display = "flex"
    indiceImagen4 = Array.from(imagenes4).indexOf(e.target);
}

imagenes4.forEach((imagen)=>{
   imagen.addEventListener('click', abreLightBox4);
});

btnAbre4.addEventListener('click', lightboxAbre4);

function lightboxAbre4(){
    lightbox4.style.display = "flex";
}
// -------------------------------------- Cuarto 5 Abre ----------------------------------------------------

const abreLightBox5 = (e) =>{
    imagenActiva5.src = e.target.src;
    lightbox5.style.display = "flex"
    indiceImagen5 = Array.from(imagenes5).indexOf(e.target);
}

imagenes5.forEach((imagen)=>{
   imagen.addEventListener('click', abreLightBox5);
});

btnAbre5.addEventListener('click', lightboxAbre5);

function lightboxAbre5(){
    lightbox5.style.display = "flex";
}

// -------------------------------------- Cuarto 6 Abre ----------------------------------------------------

const abreLightBox6 = (e) =>{
    imagenActiva6.src = e.target.src;
    lightbox6.style.display = "flex"
    indiceImagen6 = Array.from(imagenes6).indexOf(e.target);
}

imagenes6.forEach((imagen)=>{
   imagen.addEventListener('click', abreLightBox6);
});

btnAbre6.addEventListener('click', lightboxAbre6);

function lightboxAbre6(){
    lightbox6.style.display = "flex";
}

//  ------------------------------------------ Cierra LightHouse -------------------------------------------------------

btnCierra.addEventListener('click', ()=>{
    lightbox.style.display = "none";
});

// ---------------------------------------------- Cuarto 1 Cierra ----------------------------------------------------

btnCierra1.addEventListener('click', ()=>{
    lightbox1.style.display = "none";
});


// ---------------------------------------------- Cuarto 2 Cierra ----------------------------------------------------

btnCierra2.addEventListener('click', ()=>{
    lightbox2.style.display = "none";
});

// ---------------------------------------------- Cuarto 3 Cierra ----------------------------------------------------

btnCierra3.addEventListener('click', ()=>{
    lightbox3.style.display = "none";
});

// ---------------------------------------------- Cuarto 4 Cierra ----------------------------------------------------

btnCierra4.addEventListener('click', ()=>{
    lightbox4.style.display = "none";
});

// ---------------------------------------------- Cuarto 5 Cierra ----------------------------------------------------

btnCierra5.addEventListener('click', ()=>{
    lightbox5.style.display = "none";
});

// ---------------------------------------------- Cuarto 5 Cierra ----------------------------------------------------

btnCierra6.addEventListener('click', ()=>{
    lightbox6.style.display = "none";
});

// ------------------------------------------ Adelanta la Imagen ----------------------------------------------------

const adelantaImagen = ()=>{

    if(indiceImagen === imagenes.length - 1){
        indiceImagen = -1
    }
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);

// -------------------------------------- Adelanta Imagen Cuarto 1 ---------------------------

const adelantaImagen1 = ()=>{

    if(indiceImagen1 === imagenes1.length - 1){
        indiceImagen1 = -1
    }
    imagenActiva1.src = imagenes1[indiceImagen1 + 1].src;
    indiceImagen1++;
};

btnAdelanta1.addEventListener('click', adelantaImagen1);

// -------------------------------------- Adelanta Imagen Cuarto 2 ---------------------------

const adelantaImagen2 = ()=>{

    if(indiceImagen2 === imagenes2.length - 1){
        indiceImagen2 = -1
    }
    imagenActiva2.src = imagenes2[indiceImagen2 + 1].src;
    indiceImagen2++;
};

btnAdelanta2.addEventListener('click', adelantaImagen2);

// -------------------------------------- Adelanta Imagen Cuarto 3 ---------------------------

const adelantaImagen3 = ()=>{

    if(indiceImagen3 === imagenes3.length - 1){
        indiceImagen3 = -1
    }
    imagenActiva3.src = imagenes3[indiceImagen3 + 1].src;
    indiceImagen3++;
};

btnAdelanta3.addEventListener('click', adelantaImagen3);

// -------------------------------------- Adelanta Imagen Cuarto 4 ---------------------------

const adelantaImagen4 = ()=>{

    if(indiceImagen4 === imagenes4.length - 1){
        indiceImagen4 = -1
    }
    imagenActiva4.src = imagenes4[indiceImagen4 + 1].src;
    indiceImagen4++;
};

btnAdelanta4.addEventListener('click', adelantaImagen4);

// -------------------------------------- Adelanta Imagen Cuarto 5 ---------------------------

const adelantaImagen5 = ()=>{

    if(indiceImagen5 === imagenes5.length - 1){
        indiceImagen5 = -1
    }
    imagenActiva5.src = imagenes5[indiceImagen5 + 1].src;
    indiceImagen5++;
};

btnAdelanta5.addEventListener('click', adelantaImagen5);

// -------------------------------------- Adelanta Imagen Cuarto 6 ---------------------------

const adelantaImagen6 = ()=>{

    if(indiceImagen6 === imagenes6.length - 1){
        indiceImagen6 = -1
    }
    imagenActiva6.src = imagenes6[indiceImagen6 + 1].src;
    indiceImagen6++;
};

btnAdelanta6.addEventListener('click', adelantaImagen6);

// --------------------------------------- Retrocede la imagen -------------------------------------------

const retrocedeImagen = ()=>{
    if(indiceImagen === 0){
        indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;
}
btnRetrocede.addEventListener('click', retrocedeImagen);

// --------------------------------- Cuarto 1 Retrocede Imagen ----------------------------------

const retrocedeImagen1 = ()=>{
    if(indiceImagen1 === 0){
        indiceImagen1 = imagenes1.length;
    }
    imagenActiva1.src = imagenes1[indiceImagen1 - 1].src;
    indiceImagen1--;
}
btnRetrocede1.addEventListener('click', retrocedeImagen1);

// --------------------------------- Cuarto 2 Retrocede Imagen ----------------------------------

const retrocedeImagen2 = ()=>{
    if(indiceImagen2 === 0){
        indiceImagen2 = imagenes2.length;
    }
    imagenActiva2.src = imagenes2[indiceImagen2 - 1].src;
    indiceImagen2--;
}
btnRetrocede2.addEventListener('click', retrocedeImagen2);

// --------------------------------- Cuarto 3 Retrocede Imagen ----------------------------------

const retrocedeImagen3 = ()=>{
    if(indiceImagen3 === 0){
        indiceImagen3 = imagenes3.length;
    }
    imagenActiva3.src = imagenes3[indiceImagen3 - 1].src;
    indiceImagen3--;
}
btnRetrocede3.addEventListener('click', retrocedeImagen3);

// --------------------------------- Cuarto 4 Retrocede Imagen ----------------------------------

const retrocedeImagen4 = ()=>{
    if(indiceImagen4 === 0){
        indiceImagen4 = imagenes4.length;
    }
    imagenActiva4.src = imagenes4[indiceImagen4 - 1].src;
    indiceImagen4--;
}
btnRetrocede4.addEventListener('click', retrocedeImagen4);

// --------------------------------- Cuarto 5 Retrocede Imagen ----------------------------------

const retrocedeImagen5 = ()=>{
    if(indiceImagen5 === 0){
        indiceImagen5 = imagenes5.length;
    }
    imagenActiva5.src = imagenes5[indiceImagen5 - 1].src;
    indiceImagen5--;
}
btnRetrocede5.addEventListener('click', retrocedeImagen5);

// --------------------------------- Cuarto 5 Retrocede Imagen ----------------------------------

const retrocedeImagen6 = ()=>{
    if(indiceImagen6 === 0){
        indiceImagen6 = imagenes6.length;
    }
    imagenActiva6.src = imagenes6[indiceImagen6 - 1].src;
    indiceImagen6--;
}
btnRetrocede6.addEventListener('click', retrocedeImagen6);