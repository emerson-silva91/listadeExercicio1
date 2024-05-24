let valor1 = document.querySelector ("#valor1");
let valor2 = document.querySelector ("#valor2");
let h1maior = document.querySelector ("#h1maior");
let verifMaior = document.querySelector ("#verifMaior");


function verificarmaior() {
    let comp1 = Number(valor1.value);
    let comp2 = Number(valor2.value);

    if (comp1 >= comp2) {
       alert(valor1.value);
    } else {
       alert (valor2.value);
    }

}
verifMaior.onclick = function (){
    verificarmaior();
}