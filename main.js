const list = document.querySelectorAll('.navLogo');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item) => 
item.addEventListener('click', activeLink));

let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.botonRedes')

toggle.onclick =  function(){
    menu.classList.toggle('activeRedes')
}

function CalcularPromedio(){
    var v1 = document.getElementById('n1').value;
    var v2 = document.getElementById('n2').value;
    var v3 = document.getElementById('n3').value;
    var pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;

    document.getElementById('promedio').innerHTML = pro;

    
}