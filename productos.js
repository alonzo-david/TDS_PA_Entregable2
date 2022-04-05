
let btnSalir = document.getElementById('btn-salir')

btnSalir.addEventListener('click', function(){
    console.log('click')
    window.location.href = 'autenticar.html'
})


function Editar(e){
    var value = e.parentNode.parentNode.cells[0].innerHTML;
    console.log('table cell value ', value);
    window.location.href = 'producto.html'
}

function Pedido(e){
    var value = e.parentNode.parentNode.cells[0].innerHTML;
    console.log('table cell value ', value);
    window.location.href = 'pedido.html'
}