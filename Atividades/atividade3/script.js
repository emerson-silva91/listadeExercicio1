let saldo = document.querySelector ("#saldo");
let reajustar = document.querySelector ("#reajustar");
let valorReajuste = document.querySelector ("#valorReajuste");
 

function porcentagem (){
   
    let reajuste = 1;
    
    valorReajuste.textContent =  saldo.value + (saldo.value*reajuste/100);

}

reajustar.onclick = function(){

    porcentagem()
}
