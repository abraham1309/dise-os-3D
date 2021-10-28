/*
$(document).on('click', 'ul li', function(){ //Buscamos en el documento si se hace un "click" en los "li"
    $(this).addClass('activo').siblings().removeClass('activo'); //Al hacer click le agregamos la clases "activo" al "li" que se preciono, y a sus hermanos "siblings()" le quitamos la clase
})
*/

//Metodo para cerrar el munu del navbar para celulares
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});

//Metodo para copiar al portapapeles
function copiar(){
    var input=document.querySelector('#InputCorreo');
    input.select();
    document.execCommand("copy");
}
document.querySelector("#btnCopiar").addEventListener("click", copiar);

/*Efecto activo al hacer scroll*/
let seccion=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('nav ul li a');

window.onscroll=()=>{
    seccion.forEach(sec=>{
        let top=window.scrollY;
        let cordenas=sec.offsetTop-150; /*Devuelve la posición superior (en píxeles) relativa a la parte superior del elemento*/
        let alto=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=cordenas && top<cordenas+alto){
            navLinks.forEach(links=>{
                links.classList.remove('activo');
                document.querySelector('nav ul li a[href*='+ id +']').classList.add('activo');
            });
        }
    });
};

//Metodo para pausar el video cuando ya no se vea en la pantalla
window.onload=function(){
    var alto=window.innerHeight; //Alto de la pantalla
    var videos=document.querySelectorAll('video');
    var arrayVideos=[];

    videos.forEach(
        function (video){
            var altoVideo=video.offsetHeight;
            var videoMax=video.offsetTop; //Obtemos la medidas en donde termina en px
            var videoMin=video.offsetTop-alto+altoVideo; //Obtemos la medidas en donde empiza en px
            arrayVideos.push(
                {
                    minimo: videoMin,
                    maximo: videoMax,
                    video: video
                }
            )
        }
    );

    //Esta funcion se esta llamando desde el html en el body "onscroll="scroll()""
    function scroll(){
        var y=window.pageYOffset; //Posicion actual con respecto al body

        for(var i in arrayVideos){
            if(y>arrayVideos[i].minimo && y<arrayVideos[i]){
                arrayVideos[i].video.play();
            }else{
                if(arrayVideos.video.paused==false){
                    arrayVideos[i].video.pause();
                }
            }
        }
    }
}


var video=document.getElementById("videoModal");
var video2=document.getElementById("video1");

var videoP1=document.getElementById("videoPamplona");
var videoP2=document.getElementById("videoPamplona2");

function IniciarVideo(){
    video2.pause();
    video.volume="0.4";
    video.play();
}

function pausarVideo(){
    video.pause();
    video2.play();
}


function IniciarVideo2(){
    videoP1.pause();
    videoP2.volume="0.4";
    videoP2.play();
}

function pausarVideo2(){
    videoP2.pause();
    videoP1.play();
}

