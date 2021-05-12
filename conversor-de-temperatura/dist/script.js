function converter () {
  var primeiraEscala = document.getElementById("temperaturas").value
  var segundaEscala = document.getElementById("temperaturaFinal").value
  var valor = parseFloat(document.getElementById("valor").value)
  var resultado = document.getElementById("resultado")
  
  if (primeiraEscala == "grauCelsius") {
    if (segundaEscala == "grauFahrenheint") {
      var resultadoFinal = (valor * 1.8) + 32
      resultado.innerHTML = "<div class='resultadoFes'> O resultado é: " + resultadoFinal.toFixed(1) + "ºF</div>"
    } else if (segundaEscala == "kelvin") {
      var resultadoFinal = valor + 273.15
      resultado.innerHTML = "<div class='resultadoFes'> O resultado é: " + resultadoFinal.toFixed(1) + "K</div>"
    } else if (segundaEscala == "grauCelsius") {
      var resultadoFinal = valor
      resultado.innerHTML = "<div class='resultadoFes'> O resultado é: " + resultadoFinal.toFixed(1) + "ºC</div>"
    }
  }
  
  if (primeiraEscala == "grauFahrenheint") {
    if (segundaEscala == "grauCelsius") {
      var resultadoFinal = (valor - 32) / 1.8
      resultado.innerHTML = "<div class='resultadoFes'> O resultado é: " + resultadoFinal.toFixed(1) + "ºC</div>"
    } else if (segundaEscala == "kelvin") {
      var resultadoFinal = ((valor - 32) / 1.8) + 273.15
      resultado.innerHTML = "<div class='resultadoFes'> O resultado é: " + resultadoFinal.toFixed(1) + "K</div>"
    } else if (segundaEscala == "grauFahrenheint") {
      var resultadoFinal = valor
      resultado.innerHTML = "<div class='resultadoFes'> O resultado é: " + resultadoFinal.toFixed(1) + "ºF</div>"
    }
  }
  
  if (primeiraEscala == "kelvin") {
    if (segundaEscala == "grauFahrenheint") {
      var resultadoFinal = ((valor - 273.15) * 1.8) + 32
      resultado.innerHTML = "<div class='resultadoFes'> O resultado é: " + resultadoFinal.toFixed(1) + "ºF</div>"
    } else if (segundaEscala == "kelvin") {
      var resultadoFinal = valor
      resultado.innerHTML = "<div class='resultadoFes'> O resultado é: " + resultadoFinal.toFixed(1) + "K</div>"
    } else if (segundaEscala == "grauCelsius") {
      var resultadoFinal = valor - 273.15
      resultado.innerHTML = "<div class='resultadoFes'> O resultado é: " + resultadoFinal.toFixed(1) + "ºC</div>"
    }
  }
}