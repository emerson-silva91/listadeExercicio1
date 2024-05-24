let valorQuilo = document.querySelector ("#valorQuilo");
let quantiaQuilo = document.querySelector ("#quantiaQuilo");
let pagar = document.querySelector ("#pagar");
let valorPago = document.querySelector ("#valorPago");

function pesar () {
let quilovalor = Number (valorQuilo.value);
let quiloQuantia = Number (quantiaQuilo.value);

let totalpagar = quilovalor*quiloQuantia;

valorPago.textContent = totalpagar;

}
pagar.onclick = function () {

    pesar();
}