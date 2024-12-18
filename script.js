let dolar = 6.1;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
  convert("usd-to-brl");
});
brlInput.addEventListener("keyup", () => {
  convert("brl-to-usd");
});

usdInput.addEventListener("blur", () => {
  usdInput.value = formatCurrency(usdInput.value);
});

brlInput.addEventListener("blur", () => {
  brlInput.value = formatCurrency(brlInput.value);
});

usdInput.value = "1000,00";
convert("usd-to-brl");

//Funções

function formatCurrency(value) {
  // ajustar o valor
  let fixedValue = fixValue(value);
  // ultilizar a função de formatar
  let options = {
    useGrouping: false,
    minimumFractionDigits: 2,
  };
  // retorna o valor formatado

  let formatted = new Intl.NumberFormat("pt-BR", options);
  return formatted.format(fixedValue);
}

function fixValue(value) {
  let fixedValue = value.replace(",", ".");
  let floatValue = parseFloat(fixedValue);
  if (floatValue == NaN) {
    floatValue = 0;
  }
  return floatValue;
}

function convert(type) {
  if (type === "usd-to-brl") {
    // ajustar o valor
    let fixedValue = fixValue(usdInput.value);
    let result = fixedValue * dolar;
    result = result.toFixed(2);

    brlInput.value = formatCurrency(result);
    // converter o valor
    // mostra no campo de real
  }
  if (type === "brl-to-usd") {
    // ajustar o valor
    let fixedValue = fixValue(brlInput.value);
    // converter o valor
    let result = fixedValue / dolar;

    result = result.toFixed(2);
    // mostra no campo de dolar
    usdInput.value = formatCurrency(result);
  }
}
