var btnMenu = document.getElementById('btn_bars');
var nav     = document.getElementById('nav');

// asignamos el evento click para agregarle la clase mostrar al dar click
btnMenu.addEventListener('click',function(){
    nav.classList.toggle('mostrar');
});