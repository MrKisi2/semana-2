function calculadora(n1, n2) {
  var operacao = document.getElementById("operacao").value;

  // faz as operações
  if (operacao == "soma") resultado = n1 + n2;
  if (operacao == "subtracao") resultado = n1 - n2;
  if (operacao == "multiplicacao") resultado = n1 * n2;
  if (operacao == "divisao") resultado = n1 / n2;
  if (operacao == "resto") resultado = n1 % n2;

  //seleciona o elemento "resultado"
  document.getElementById("resultado").innerHTML = resultado;
}
