function formatar(valor) {
  // declaração das variáveis
  var i;
  var resultado = "";
  var arrayValores = valor.split(", ");

  // ordena o array
  arrayValores.sort(function (a, b) {
    return a - b;
  });

  for (i = 0; i != arrayValores.length; i++) resultado += " " + arrayValores[i];

  // seta o resultado
  document.getElementById("resultado").innerHTML = resultado;
}
