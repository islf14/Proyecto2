var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 10, 10);

function pixel(){
    var a=document.getElementById("ejex").value;
    var b = document.getElementById("ejey").value;
    //alert("es es "+a);    
    if(a=="hola"){
        alert("es hola");        
    }
    
    ctx.fillStyle ="blue";
    ctx.fillRect(a, b, 10, 10);
}

function copy() {
    var imgData = ctx.getImageData(10, 10, 10, 10);
    ctx.putImageData(imgData, 20, 70);
}

function agrandar() {
    var imgData = ctx.getImageData(10, 10, 15, 15);
    ctx.putImageData(imgData, 50, 70);
}
