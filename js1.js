var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//ctx.fillStyle = "red";
//ctx.fillRect(10, 10, 10, 10);
var a = 0, b = 0, c = 0, d = 0;
var x0 = 0, y0 = 0, xf = 0, yf = 0;

function recibir_datos() {
    a = document.getElementById("ejex").value;
    b = document.getElementById("ejey").value;
    c = document.getElementById("ejexf").value;
    d = document.getElementById("ejeyf").value;
	
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
    x0 = Math.round(a);
	y0 = Math.round(b);
	xf = Math.round(c);
    yf = Math.round(d);
    console.log("i("+x0+ ";"+y0+") -> f("+xf+";"+yf+")");
}

function intercambio(){
    console.log("intercambiando puntos");
    var auxx = x0;
    x0 = xf;
    xf = auxx;
    var auxy = y0;
    y0 = yf;
    yf = auxy;
    console.log("nuevo i("+x0+";"+y0+") ->f("+xf+";"+yf+")");
    
}

//////////////////////////////////////////////////

function pixel() {
    a = document.getElementById("ejex").value;
    b = document.getElementById("ejey").value;
    //alert("a es: " + a);
    //if(a=="hola"){alert("es hola");}
    ctx.fillStyle = "blue";
    ctx.fillRect(a, b, 1, 1);
}
////////////////////////////////////////////////////////

function linea_md() {
    recibir_datos();
    //esta intercambiando datos
    if (x0 <= xf) {
        console.log("Mantiene puntos");
    }else {
        intercambio();
    }
    var i = 0;
    
    //Grafico de lineas
    if (y0==yf) {
        //grafica una linea horizontal
        //alert("entrando a graficar línea");
        for(i=x0;i<=xf;i++){
            ctx.fillStyle = "blue";
            ctx.fillRect(i, y0, 1, 1);
        }
    }
    
    if(x0==xf) {
        if(y0>yf){
            intercambio();
            for(i=y0;i<=yf;i++){
                ctx.fillStyle = "blue";
                ctx.fillRect(x0, i, 1, 1);
            }
        }else{
            //grafica linea vertical
            for(i=y0;i<=yf;i++){
                ctx.fillStyle = "blue";
                ctx.fillRect(x0, i, 1, 1);
            }
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
        ctx.fillStyle = "blue";
        ctx.fillRect(i, y, 1, 1);
    }
    console.log("y:"+y);
}
////////////////////////////////////////

function linea_add_sim()  {
    recibir_datos();
    var m = (yf-y0)/(xf-x0);
    console.log("m en add: "+m);
    if((Math.abs(m)<1)&&(x0>xf) || (Math.abs(m)>1)&&(y0>yf)){
        intercambio();
    }
    ctx.fillStyle = "red";
    ctx.fillRect(x0, y0, 1, 1);
    if(Math.abs(m)<1){
        console.log("graficando linea con m<1");
        y = y0;
        for(xi=(x0+1);xi<=(xf-1);xi++){
            y = y + m;
            ctx.fillRect(xi, Math.round(y), 1, 1);
        }
    }else{
        //pendiente mayor a 1
        console.log("linea con m>1");        
        minv=1/m;
        x = x0;
        for(yi=(y0+1);yi<=(yf-1);yi++){
            x = x + minv;
            ctx.fillRect(Math.round(x), yi, 1, 1);
        }
    }
    ctx.fillRect(xf, yf, 1, 1);
}

/*
function copy() {
    var imgData = ctx.getImageData(10, 10, 10, 10);
    ctx.putImageData(imgData, 20, 70);
}*/