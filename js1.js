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

function redondeo2decimales(numero)
{
    var flotante = parseFloat(numero);
    var resultado = Math.round(flotante*100)/100;
    console.log("resultado "+ resultado);
    return resultado;
}

function linea() {
    var a = document.getElementById("ejex").value;
    console.log("recibiendo " + a);
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
		
    if (x0 < xf) {
        alert("x0 esta a la izquierda");
		if (y0==yf) {
			for(i=x0;i<=xf;i++){
				ctx.fillStyle = "blue";
				ctx.fillRect(i, yf, 1, 1);
			}
		}
		
    }
	else {
		alert("x0 es mayor");
	}
    
}

function copy() {
    var imgData = ctx.getImageData(10, 10, 10, 10);
    ctx.putImageData(imgData, 20, 70);
}

function agrandar() {
    var imgData =ctx.getImageData(10, 10, 15, 15);
    ctx.putImageData(imgData, 50, 70);
}
