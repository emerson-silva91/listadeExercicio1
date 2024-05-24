let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valor3 = document.querySelector("#valor3");
let valor4 = document.querySelector("#valor4");
let verifMenor = document.querySelector("#verifMenor");
let h1menor = document.querySelector("#h1menor");

function verificarmenor() {
    let comp1 = Number(valor1.value);
    let comp2 = Number(valor2.value);
    let comp3 = Number(valor3.value);
    let comp4 = Number(valor4.value);

    if (comp1 < comp2 && comp1 < comp3 && comp1 < comp4) {
        h1menor.textContent = `O menor valor  ${comp1}`;
    } else if (comp2 < comp1 && comp2 < comp3 && comp2 < comp4) {
        h1menor.textContent = `O menor valor ${comp2}`;
    } else if (comp3 < comp1 && comp3 < comp2 && comp3 < comp4) {
        h1menor.textContent = `O menor valor  ${comp3}`;
    } else if (comp4 < comp1 && comp4 < comp2 && comp4 < comp3) {
        h1menor.textContent = `O menor valor  ${comp4}`;
    } else {
        h1menor.textContent = "Todos os valores são iguais.";
    }


}



verifMenor.onclick = function () {

    verificarmenor();

}