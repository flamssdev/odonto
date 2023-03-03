var palavras = ["Tenha a melhor AUTOESTIMA", "Tenha a melhor CONFIANÇA", "Tenha AMOR-PRÓPRIO", "Permita-se SORRIR MAIS"];
var indicePalavra = 0;

function atualizarPalavra() {
  document.getElementById("palavras").innerHTML = palavras[indicePalavra];
  indicePalavra++;
  if (indicePalavra >= palavras.length) {
    indicePalavra = palavras.length - 1;
  }
}

setInterval(atualizarPalavra, 3000);