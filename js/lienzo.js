var x=0,y=0;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var a;
var cont_puntos=0;

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
function posicion(canvas,evt,x,y) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: parseInt(evt.clientX - rect.left),
        y: parseInt((rect.top+canvas.height)-evt.clientY)
    };
}

c.addEventListener("click", function(evt){
    cont_puntos++;
    console.log(cont_puntos);
    //document.getElementById("demo").innerHTML = "Hello World!";
});
c.addEventListener('mousemove', function(evt) {
    var mouse_pos = posicion(c,evt);
    var a = mouse_pos.x;
    var b = mouse_pos.y;
    var ejex = document.getElementById("ejex");
    var ejey = document.getElementById("ejey");
    ejex.value = a;
    ejey.value = b;

    /*if (band == 0) {
      var msg_x = mousePos.x;
      var msg_y =  mousePos.y;
      if(md_numx1 != null && md_numy1 != null)
      {
        md_numx1.value = msg_x;
        md_numy1.value= msg_y;
      }
      //debugger;
    }
    */

  });