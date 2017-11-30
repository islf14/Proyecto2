var x=0,y=0;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var a;

function en_lienzo(){
    event = event || window.event;
    x = event.pageX - c.offsetLeft,
    y = event.pageY - c.offsetTop;
    y = 500-y;
    a = document.getElementById('ejex');
    var pHoras = document.getElementById('horas')
    console.log("x: "+x);
    console.log("y: "+y);
    
}