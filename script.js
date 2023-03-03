var palavras = ["Tenha a melhor ", "Tenha a melhor ", "Tenha ", "Permita-se "];
var complemento = ["AUTOESTIMA", "CONFIANÇA", "AMOR-PRÓPRIO", "SORRIR MAIS"];
var indicePalavra = 0;

function atualizarPalavra() {
  document.getElementById("palavras").innerHTML = palavras[indicePalavra];
  document.getElementById("palavra-teste").innerHTML = complemento[indicePalavra];
  indicePalavra++;
  if (indicePalavra >= palavras.length) {
    indicePalavra = palavras.length - 1;
  }
}

setInterval(atualizarPalavra, 3000);