'use stric';

/*
let n1 = prompt('INTRODUCE NOMBRE 1','ADOLFO');
let n2 = prompt('INTRODUCE NOMBRE 2','ALEX');

function mostrarConsola(n1, n2){
    console.log(n1 + ' '+ n2);
}

function mostrarDocumento(n1, n2){
    document.write(n1 + ' '+ n2);
}

function mostrar(n1, n2, n3 = false){
    if(n3 == false){
        mostrarConsola(n1,n2);
    }else{
        mostrarDocumento(n1,n2);
    }

}


mostrar(n1,n2,false);


// alertas en ventanas emergentes
alert('saludos');


var res = confirm('Estas Seguro?');

var otro = prompt('estas dicendome tu nombre?');



document.write (`BIENVENIDO ${ otro} te EStaba esperando`);


var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;

  
	return -1;
};

*/

// LLAMA ALA VARIABLE DIV1 Y LINKEA LA ID DESDE HTML EN EL TAG DIV- LLAMADO DIV1
var div1 = document.getElementById('div1');
div1.innerHTML = ('TEXTO MODIFICADO DESDE EL JS');
div1.style.fontSize = '25px';

console.log(div1);

var parrafo1 = document.getElementsByClassName('parrafo1');
parrafo1[2].innerHTML = ('PARRAFO CAMBIADO');
parrafo1[2].style.fontFamily = 'arial';
console.log(parrafo1);

var boton = document.querySelector('#boton');
var div2= document.querySelector('#div2');
/*
boton.addEventListener('click',function(){
    div2.innerHTML = ('<br>Has entrado ala Sesion<br>');
});*/

function pulsar(){
    div2.innerHTML = ('<br>Has entrado ala Sesion<br>');
}


