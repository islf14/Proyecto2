function muestra_oculta(id){
    if (document.getElementById){ //se obtiene el id
        var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
        el.style.display = (el.style.display == 'none') ? 'block' : 'none'; ///damos un atributo display:none que oculta el div
    }
    activa();
}
/*
    window.onload = function(){//hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente
        muestra_oculta('contenido_a_mostrar');// "contenido_a_mostrar" es el nombre de la etiqueta DIV que deseamos mostrar
    }*/

function activa(){
    document.getElementById("menu-bar").checked = false;
}