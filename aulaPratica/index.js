var bebida = "Café"

switch (bebida) {
  case "Café":
    console.log("Você escolheu Café. Valor da Compra: R$ 8,00");
    break;
  case "Leite":
    console.log("Você escolheu Leite. Valor da Compra: R$ 4,00");
    break;
  case "Chá":
    console.log("Você escolheu chá. Valor da Compra: R$ 6,00");
    break;
  default: console.log("Você escolheu nenhuma bebida ou ela não está disponivel");
    break;
}