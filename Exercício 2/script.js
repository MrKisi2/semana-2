function calcular() {
  // seleciona vário elementos da classe numberInput
  var reais = document.querySelector("#numberInput").value;

  // regras de negócio
  var quant100 = Math.floor(reais / 100);

  var quant50 = Math.floor((reais - quant100 * 100) / 50);

  var quant20 = Math.floor((reais - (quant100 * 100 + quant50 * 50)) / 20);

  var quant10 = Math.floor(
    (reais - (quant100 * 100 + quant50 * 50 + quant20 * 20)) / 10
  );

  var quant5 = Math.floor(
    (reais - (quant100 * 100 + quant50 * 50 + quant20 * 20 + quant10 * 10)) / 5
  );

  var quant2 = Math.floor(
    (reais -
      (quant100 * 100 +
        quant50 * 50 +
        quant20 * 20 +
        quant10 * 10 +
        quant5 * 5)) /
      2
  );

  var quant1 =
    reais -
    (quant100 * 100 +
      quant50 * 50 +
      quant20 * 20 +
      quant10 * 10 +
      quant5 * 5 +
      quant2 * 2);
      
  // Seta os elementos para mostrar os resultados
  document.getElementById(
    "nota100"
  ).innerHTML = `${quant100} nota(s) de R$100,00`;

  document.getElementById("nota50").innerHTML = `${quant50} nota(s) de R$50,00`;
  document.getElementById("nota20").innerHTML = `${quant20} nota(s) de R$20,00`;
  document.getElementById("nota10").innerHTML = `${quant10} nota(s) de R$10,00`;
  document.getElementById("nota5").innerHTML = `${quant5} nota(s) de R$5,00`;
  document.getElementById("nota2").innerHTML = `${quant2} nota(s) de R$2,00`;
  document.getElementById("nota1").innerHTML = `${quant1} nota(s) de R$1,00`;
}
