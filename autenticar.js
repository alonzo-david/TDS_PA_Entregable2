
var frmLogin = document.getElementById('frm-login')

frmLogin.addEventListener('submit', event => {
    event.preventDefault()
    let usuario = document.getElementById('username')
    let pass = document.getElementById('password')

    console.log('usuario', usuario)
    window.location.href = 'productos.html'

})