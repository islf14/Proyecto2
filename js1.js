var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//ctx.fillStyle = "red";
//ctx.fillRect(10, 10, 10, 10);
var a = 0, b = 0, c = 0, d = 0, i = 0;
var x0 = 0, y0 = 0, xf = 0, yf = 0, pendiente = 0;;
////////////////////////////////////////////
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
    console.log("Recibiendo : i("+x0+ ";"+y0+") -> f("+xf+";"+yf+")");
}
/////////////////////////////////////////////
function intercambio(){
    console.log("intercambiando puntos");
    var auxx = x0;
    x0 = xf;
    xf = auxx;
    var auxy = y0;
    y0 = yf;
    yf = auxy;
    console.log("nuevo i("+x0+";"+y0+") -> f("+xf+";"+yf+")");
}
//////////////////////////////////////////////////

function pixel() {
    a = document.getElementById("ejex").value;
    b = document.getElementById("ejey").value;
    //alert("a es: " + a);
    //if(a=="hola"){alert("es hola");}
    ctx.fillStyle = "black";
    ctx.fillRect(a, b, 1, 1);
}
////////////////////////////////////////////////////////
function linea_horizontal(){
     //grafica una linea horizontal
     console.log("graficando línea horizontal");
     for(i=x0;i<=xf;i++){
         ctx.fillStyle = "black";
         ctx.fillRect(i, y0, 1, 1);
     }
}
////////////////////////
function linea_vertical(){
    console.log("Graficando linea vertical");
    for(i=y0;i<=yf;i++){
        ctx.fillStyle = "black";
        ctx.fillRect(x0, i, 1, 1);
    }
}
/////////////////////////////////////
function linea_diag_perf(){
    //dibujando line diagonal 45
    console.log("graficando diagonal perfecta");
    var x=x0; var y=y0;
    i=0;
    if(pendiente==1){
        console.log("graficando linea con m = 1");
        while ((x+i)<=xf){
            ctx.fillStyle = "black";
            ctx.fillRect(x+i, y+i, 1, 1);
            i=i+1;
        }
        //console.log("i en m=1: "+i);
        return false;
    }
    if(pendiente==-1){
        console.log("graficando linea con m = -1");
        while ((x+i)<=xf){
            ctx.fillStyle = "black";
            ctx.fillRect(x+i, y-i, 1, 1);
            i=i+1;
        }
        //console.log("i en m=-1: "+i);
        return false;    
    }
}
/////////////////////////////////////////////////
function lineasbasicas(){
    recibir_datos();
    //esta intercambiando datos
    if (x0 <= xf) {
        console.log("Mantiene puntos por eje x");
    }else {
        intercambio();
    }
    //Grafico de lineas
    if (y0==yf) {
        linea_horizontal();
        return false;
    }
    if(x0==xf) {
        if(y0>yf){
            console.log("y0>yf entonces intercambia");
            intercambio();
        }
        linea_vertical();
        return false;
    }
    //hallando  diferenciales y pendiente
    var dyy = yf-y0;
    var dxx = xf-x0;
    pendiente=0;
    console.log("dyy:"+dyy+"; dxx:"+dxx);
    if(dyy==dxx){
        pendiente = 1;
    }
    var auxpend = dxx*(-1);
    console.log("dxx*(-1) = "+auxpend);
    if(dyy==auxpend){
        pendiente = -1;
    }
    console.log("pendiente condicionada: " + pendiente); 
    if (pendiente==1 || pendiente==-1){
        linea_diag_perf();                
    }
}
//////////////////////////////////////
function linea_md() {
    lineasbasicas();
    if (x0!=xf && y0!=yf && pendiente==0){
        //Dibuajando linea arbitraria
        y=y0;
        x=x0;
        var dy = yf-y0;
        var dx = xf-x0;
        pendiente = dy/dx;
        console.log("pendiente real: "+pendiente);
        b=y-pendiente*x;
        console.log("b: "+b);
        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, 1, 1);
        console.log("graficando linea arbitraria");
        for(i=x+1;i<=xf;i++) {
            y=Math.round(pendiente*i+b);
            ctx.fillStyle = "blue";
            ctx.fillRect(i, y, 1, 1);
        }
        console.log("y:"+y);
    }    
}
////////////////////////////////////////

function linea_add_simple()  {
    lineasbasicas();
    if (x0!=xf && y0!=yf && pendiente==0){
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
}

function linea_add_entero(){
    lineasbasicas();
    if (x0!=xf && y0!=yf && pendiente==0){
        //alert("implementando...")
        var error=0,dx=0,dy=0,n=0,x=0,y=0,cuenta=0;
        dy=yf-y0;
        dx=xf-x0;
        console.log("add entero-> dy="+dy+"; dx="+dx);
        //verificamos que no se negativo
        if (dy<0) {
            intercambio();
            dy=-dy;
            dx=-dx;
            console.log("nuevos dy="+dy+"; dx="+dx)
        }
        ctx.fillStyle = "#2AC004";//dibujamos primer punto
        ctx.fillRect(x0, y0, 1, 1);
        x = x0;
        y = y0;
        if (dx>=0){
            //caso 1 o 2
            if (dx>=dy){
                //caso 1
                console.log("Caso 1");
                for (cuenta=1;cuenta<=(dx-1);cuenta++){
                    if (error<0){
                        x = x + 1;
                        ctx.fillRect(x, y, 1, 1);
                        error=error+dy;                        
                    }else{
                        //si error mayor o igual a 0
                        x = x + 1;
                        y = y + 1;
                        ctx.fillRect(x, y, 1, 1);
                        error = error + dy - dx;
                    }
                }
            }else{
                //caso 2
                console.log("Caso 2");
                for (cuenta=1;cuenta<=(dy-1);cuenta++){
                    if(error<0){
                        x = x + 1;
                        y = y + 1;
                        ctx.fillRect(x, y, 1, 1);
                        error = error + dy - dx;
                    }else{
                        //error>=0
                        y = y + 1;
                        ctx.fillRect(x, y, 1, 1);
                        error = error - dx;
                    }                    
                }
            }
        }else{
            //caso 3 o 4
            if (Math.abs(dx)>=Math.abs(dy)){
                //caso 3
                console.log("Caso 3");
                for(cuenta=1;cuenta<=(Math.abs(dx)-1);cuenta++){
                    if(error<0){
                        x = x - 1;
                        ctx.fillRect(x, y, 1, 1);
                        error = error + dy;
                    }else{
                        //error>=0
                        x = x - 1;
                        y = y + 1;
                        ctx.fillRect(x, y, 1, 1);
                        error = error + dx + dy;
                    }
                }
            }else{
                //caso 4
                console.log("Caso 4");                
                for(cuenta = 1; cuenta <= (dy-1); cuenta++){
                    if (error<0){
                        x = x - 1;
                        y = y +1;
                        ctx.fillRect(x, y, 1, 1);
                        error = error + dx + dy; 
                    }else{
                        //error >=0
                        y = y +1;
                        ctx.fillRect(x, y, 1, 1);
                        error= error+dx;
                    }
                }
            }
        }
        ctx.fillRect(xf, yf, 1, 1);
    }
}
/*
function copy() {
    var imgData = ctx.getImageData(10, 10, 10, 10);
    ctx.putImageData(imgData, 20, 70);
}*/