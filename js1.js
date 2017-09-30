var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//ctx.fillStyle = "red";
//ctx.fillRect(10, 10, 10, 10);

function pixel() {
    var a = document.getElementById("ejex").value;
    var b = document.getElementById("ejey").value;
    //alert("a es: " + a);
    //if(a=="hola"){alert("es hola");}
    ctx.fillStyle = "blue";
    ctx.fillRect(a, b, 10, 10);
}

function linea() {
    var a = document.getElementById("ejex").value;
    var b = document.getElementById("ejey").value;
    var c = document.getElementById("ejexf").value;
    var d = document.getElementById("ejeyf").value;
	
	if(a==""){
        alert("Ingrse X0");
		return false;
    }
    if(b==""){
		alert("Ingrese Y0");
		return false;
    }
    if(c==""){
		alert("Ingrese Xf");
		return false;
    }
    if(d==""){
		alert("Ingrese Yf");
		return false;
    }
    
    var x0 = Math.round(a);
	var y0 = Math.round(b);
	var xf = Math.round(c);
    var yf = Math.round(d);
    console.log(x0+ " "+y0+" "+xf+" "+yf);
	
    if (x0 <= xf) {
        console.log("corrd in: ("+x0+";"+y0+") coord f: ("+xf+";"+yf+")");
    }else {
        var auxx = x0;
        x0 = xf;
        xf = auxx;
        var auxy = y0;
        y0 = yf;
        yf = auxy;
        console.log("nuevas corrd in: ("+x0+";"+y0+")  coord f: ("+xf+";"+yf+")");
    }
    var i = 0;

    if (y0==yf) {
        //grafica una linea horizontal
        //alert("entrando a graficar línea");
        for(i=x0;i<=xf;i++){
            ctx.fillStyle = "blue";
            ctx.fillRect(i, y0, 1, 1);
        }
    }
    
    if(x0==xf) {
        //grafica linea vertical
        for(i=y0;i<=yf;i++){
            ctx.fillStyle = "blue";
            ctx.fillRect(x0, i, 1, 1);
        }
    }
    
    //hallando  diferenciales y pendiente
    var dy = yf-y0;
    var dx = xf-x0;
    console.log("dy: "+dy+" dx: "+dx);
    var pendiente = 0;
    if(dy==dx){
        pendiente = 1;
    }
    var auxpend = dx*(-1);
    console.log("dx*-1 = "+auxpend);
    if(dy==auxpend){
        pendiente = -1;
    }
    console.log("pendiente: " + pendiente);
    
    //dibujando line diagonal 45
    var x=x0;
    var y=y0;
    i=0;
    if(pendiente==1){
        while ((x+i)<=xf){
            ctx.fillStyle = "blue";
            ctx.fillRect(x+i, y+i, 1, 1);
            i=i+1;
        }
        console.log("i en m=1: "+i);
        
    }
    if(pendiente==-1){
        while ((x+i)<=xf){
            ctx.fillStyle = "blue";
            ctx.fillRect(x+i, y-i, 1, 1);
            i=i+1;
        }
        console.log("i en m=-1: "+i);        
    }

    //Dibuajando linea arbitraria
    y=y0;
    x=x0;
    pendiente = dy/dx;
    console.log("pendiente en arbitraria"+pendiente)
    b=y-pendiente*x;
    console.log("b: "+b);
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, 1, 1);
    for(i=x+1;i<=xf;i++) {
        y=Math.round(pendiente*i+b);
        console.log("y:"+y)
        ctx.fillStyle = "blue";
        ctx.fillRect(i, y, 1, 1);
    }
}

/*
function copy() {
    var imgData = ctx.getImageData(10, 10, 10, 10);
    ctx.putImageData(imgData, 20, 70);
}*/