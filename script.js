var palavras = ["Tenha a melhor ", "Tenha a melhor ", "Tenha ", "Permita-se "];
var complemento = ["AUTOESTIMA", "CONFIANÇA", "AMOR-PRÓPRIO", "SORRIR MAIS"];
var indicePalavra = 0;
var intervalo;

// function atualizarPalavra() {
//   document.getElementById("palavras").innerHTML = palavras[indicePalavra];
//   document.getElementById("palavra-teste").innerHTML = complemento[indicePalavra];
//   indicePalavra++;
//   if (indicePalavra >= palavras.length) {
//     indicePalavra = palavras.length - 1;
//   }
// }



function atualizarPalavra() {
  var elementoPalavra = document.getElementById("palavras");
  let elementoComplemento = document.getElementById("palavra-teste");
  elementoPalavra.style.opacity = 0;
  elementoComplemento.style.opacity = 0
  setTimeout(function() {
    elementoPalavra.innerHTML = palavras[indicePalavra];
    elementoPalavra.style.opacity = 1;
    elementoComplemento.innerHTML = complemento[indicePalavra];
    elementoComplemento.style.opacity = 1;
    if (indicePalavra >= palavras.length - 1) {
      clearInterval(intervalo);
    }
    indicePalavra++;
  }, 1000);
}


intervalo = setInterval(atualizarPalavra, 3000);