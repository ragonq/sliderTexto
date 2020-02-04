/* Importando funcion desde el hs modulo.. */
import { slidergz1 } from './js/modulo.slidergz1.min.js';
// import * as gzslider1 from './js/modulo-slidergz1.js';
window.addEventListener('DOMContentLoaded',function(){
    /* Colocando el tiempo por defecto que tendra el slider y mandandolo hacia el archivo modulo-slidergz1 */
    slidergz1.gzs1_defecto.tiempo = 6000;
    /* Llamando a la funcion */
    slidergz1.gzs1_motor();
    //Demo: console.log(slidergz1.gzs1_defecto.tiempo);
});