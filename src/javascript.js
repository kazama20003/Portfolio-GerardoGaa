const html = document.querySelector('html');
const btnTocar = document.querySelector('.tocame');

btnTocar.addEventListener('click', function(){
    html.setAttribute('contentColor','oscuro');
})

alert("ds")