
var carousel = document.querySelectorAll(".playlist");
var sdpd = document.querySelector('#btnsdpd');
var inb = document.querySelector('#butinb');
var bas = document.querySelector('#butbas');
var inj = document.querySelector('#btninj');
var cit = document.querySelector('#butcit');
var smc = document.querySelector('#butsmc');
var eea = document.querySelector('#buteea');
var gv4 = document.querySelector('#butgov4');
var mnt = document.querySelector('#butmnt');
var msd = document.querySelector('#butmsd');

var prox = document.querySelector('#prox');
var anterior = document.querySelector('#anter');

var contador = 0;

prox.addEventListener('click', function(){
    if(contador < 9) {contador++} else{contador = 0}
    trocarPlaylist();
});

anterior.addEventListener('click', function(){
    if(contador > 0) {contador--} else{contador = 9}
    trocarPlaylist();
});


gv4.addEventListener('click', function(){
    contador = 0;
    trocarPlaylist();
});

mnt.addEventListener('click', function(){
    contador = 1;
    trocarPlaylist();
});

eea.addEventListener('click', function(){
    contador = 2;
    trocarPlaylist();
});

inb.addEventListener('click', function(){
    contador = 3;
    trocarPlaylist();
});

smc.addEventListener('click', function(){
    contador = 4;
    trocarPlaylist();
});

inj.addEventListener('click', function(){
    contador = 5;
    trocarPlaylist();
});

cit.addEventListener('click', function(){
    contador = 6;
    trocarPlaylist();
});

sdpd.addEventListener('click', function(){
    contador = 7;
    trocarPlaylist();
});

bas.addEventListener('click', function(){
    contador = 8;
    trocarPlaylist();
});

msd.addEventListener('click', function(){
    contador = 9;
    trocarPlaylist();
});





var i =0
function trocarPlaylist(){
    for(i = 0; i < carousel.length; i++){
        carousel[i].classList.add('invisivel');        
    }
    carousel[contador].classList.remove('invisivel');
    
}

