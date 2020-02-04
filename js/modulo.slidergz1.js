/*
Plugin Name: Slider1 Gz
Author: Raphael Gonzales Quispe
Version: 2.0 
*/

//Demo: Capturar por clases let btn_izq = document.querySelector('.btn-izq');
/* Declaramos el boton izquierdo del carrusel */
let btn_izq = document.getElementById('btn-izq');
/* Declaramos el boton derecho del carrusel */
let btn_der = document.getElementById('btn-der');
/* Capturamos todos los div que tengan la clases -> .gz-item-carrusel */
let contenedor_items = document.querySelectorAll('.gz-item-carrusel');
/* Capturamos todos los radio buttom */
let gzs1_radio = document.querySelectorAll('input[name="rdb-cargz"]');
/* Declaramos el valor inicial del radio  */
let gzs1_radio_ini = 0;
/* Declarando un array con el tiempo que se va demorar el slider en pasar por defecto */
let gzs1_defecto = { 'tiempo':1000 };

/* Funcion flecha  para animar el carrusel*/
let gzs1_animacion = () => {
    for(let i = 0; i < contenedor_items.length; i++){
        if(gzs1_radio[i].checked == true){
            contenedor_items[i].classList.add('mostrar');
            contenedor_items[i].classList.remove('ocultar');
          
        }else{
            contenedor_items[i].classList.add('ocultar');
            contenedor_items[i].classList.remove('mostrar');
        }
    } 
}

/* Funcion que realiza el retroceso en el slider, las variables que usa solo pueden usar usadas dentro de la funcion*/
 function gzs1_izquierdo(){
    /* Comparamos y disminuimos en cada cloc el radio inicial si es menor a los radios que hay en total */
    // if (--gzs1_radio_ini >= gzs1_radio.length) {
    //     /* Si el radio es igual al total su nuevo valor sera de 0 */
    //     gzs1_radio_ini = 0;
    // }else{
    //     /* Caso contrario se almacenara nuevamente */
    //     gzs1_radio_ini = gzs1_radio_ini;
    // }
   
    // /* Comparamos si el radio de la pos[0] esta marcado */
    // if(gzs1_radio[0].checked == true){
    //     /* El nuevo valor del radio inicial es (radio total - 1) */
    //     gzs1_radio_ini = gzs1_radio.length - 1;
    // }

     /* Modo abreviado */
     gzs1_radio_ini = --gzs1_radio_ini >= gzs1_radio.length ? gzs1_radio_ini = 0 : gzs1_radio_ini = gzs1_radio_ini;
     gzs1_radio_ini = gzs1_radio[0].checked == true ? gzs1_radio_ini = gzs1_radio.length - 1 : gzs1_radio_ini ;
    
     /* que se marque el nuevo radio inicial */
    gzs1_radio[gzs1_radio_ini].checked = true;
    gzs1_animacion();
}

/* Funcion que realiza el avance del slider */
 function gzs1_derecha(){
    // /* Comparamos y aumentamos en cada clic el radio inicial si es menor a los radios que hay en total */
    // if (++gzs1_radio_ini >= gzs1_radio.length ) {
    //     /* Si el radio es igual al total su nuevo valor sera de 0 */
    //     gzs1_radio_ini = 0;
    // }else{
    //     /* Caso contrario se almacenara nuevamente */
    //     gzs1_radio_ini = gzs1_radio_ini;        
    // }

    // /* Comparamos si el radio de la pos[0] esta marcado */
    // if(gzs1_radio[0].checked == true){
    //     /* El nuevo valor del radio sera la posicion[1] ya que la pos[0] ya se encuentra marcada */
    //     gzs1_radio_ini = 1;
    // }

    /* Modo abreviado */
    gzs1_radio_ini = ++gzs1_radio_ini >= gzs1_radio.length ? gzs1_radio_ini = 0 : gzs1_radio_ini = gzs1_radio_ini;  
    gzs1_radio_ini = gzs1_radio[0].checked == true ?  gzs1_radio_ini = 1 : gzs1_radio_ini = gzs1_radio_ini;

    /* Marca el radio */
    gzs1_radio[gzs1_radio_ini].checked = true;
    gzs1_animacion();
}

function gzs1_motor(){
    /* Marcamos el primer radio buttom  */
    gzs1_radio[0].checked = true;

    /* #### EVENTO CLIC: BOTON IZQUIERDO -> (evemto,funcion)*/
    btn_izq.addEventListener('click',gzs1_izquierdo);
    
    /* #### EVENTO CLIC: BOTON DERECHA -> (evemto,funcion)*/
    btn_der.addEventListener('click', gzs1_derecha);
    setInterval(gzs1_derecha,gzs1_defecto.tiempo);
}
/* Exportando la funcion gzs1_motor y el array de la configuracion*/
export const slidergz1 = { gzs1_motor, gzs1_defecto}