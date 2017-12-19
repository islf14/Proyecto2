var x=0,y=0,valorx=null,valory=null;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var a;
var cont_puntos=0;
//var ejex = document.getElementById("ejex");
//var ejey = document.getElementById("ejey");
var campo1,campo2,indicador=false;
function en_lienzo(){
    event = event || window.event;
    x = event.pageX - c.offsetLeft,
    y = event.pageY - c.offsetTop;
    y = c.height-y;
    a = document.getElementById('ejex');
    var pHoras = document.getElementById('horas')
    console.log("x: "+x);
    console.log("y: "+y);    
}

document.getElementById("ejex").addEventListener("click", function(){
    asignarxy();
});
document.getElementById("ejey").addEventListener("click", function(){
    asignarxy();
});

document.getElementById("ejexf").addEventListener("click", function(){
    asignarxyf();
});
document.getElementById("ejeyf").addEventListener("click", function(){
    asignarxyf();
});
function asignarxy(){
    campo1 = document.getElementById("ejex");
    campo2 = document.getElementById("ejey");
    activamouse(campo1,campo2);
    indicador=true;
}
function asignarxyf(){
    campo1 = document.getElementById("ejexf");
    campo2 = document.getElementById("ejeyf");
    activamouse(campo1,campo2);
    indicador=true;
}

function activamouse(cm1,cm2) {
    c.addEventListener('mousemove', function(evt){
        var mouse_pos = posicion(c,evt);
        var a = mouse_pos.x;
        var b = mouse_pos.y;
        cm1.value = a;
        cm2.value = b;
    });
}
function posicion(canvas,evt,x,y) {
    var rect = canvas.getBoundingClientRect();
    valorx = parseInt(evt.clientX - rect.left);
    valory = parseInt((rect.top+canvas.height)-evt.clientY);
    return {
        x: parseInt(evt.clientX - rect.left),
        y: parseInt((rect.top+canvas.height)-evt.clientY)
    };
}
c.addEventListener("click", function(evt){
    cont_puntos++;
    console.log("cont_puntos: "+cont_puntos);
    var a = valorx;//mouse_pos.x;
    var b = valory;//mouse_pos.y;
    if(indicador==true){
        campo1.value = a;
        campo2.value = b;
        c.addEventListener("mousemove",function(evt){
            campo1.value = a;
            campo2.value = b;
        });
    } 
});