let valor1 = document.querySelector ("#valor1");
let valor2 = document.querySelector ("#valor2");
let valor3 = document.querySelector ("#valor3");
let valor4 = document.querySelector ("#valor4");
let verifMenor = document.querySelector ("#verifMenor");
let h1menor = document.querySelector ("#h1menor");

function verificarmenor (){
    let comp1 = Number(valor1.value);
    let comp2 = Number(valor2.value);
    let comp3 = Number(valor3.value);
    let comp4 = Number(valor4.value);

   if(comp1<=comp2){
    h1menor (comp1)
   }



}











verifMenor.onclick = function (){

    verificarmenor();

}