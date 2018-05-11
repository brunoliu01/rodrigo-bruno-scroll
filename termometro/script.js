
$(document).ready(function(){

//inicio el scrollmagic
var controller = new ScrollMagic.Controller();

//vamos construyendo la scena
var ourScene = new ScrollMagic.Scene({
	triggerElement: '#cuadro'
})
.setClassToggle('#cuadro', 'fade-in')  //se le añade la clase a nuestro contenedor
.addTo(controller);
});