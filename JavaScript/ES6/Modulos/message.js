import message from "./message.js";

const message = () => {
    const salario = 9000
    const ano = 2021
    const empresa = 'Xoogli'
    return `O ano é ${ano} e todos da empresa ${empresa} receberá ${salario} reais se atingir 5 anos na empresa`
}

export default message;

// Importar
// Você pode importar módulos para um arquivo de duas maneiras, com base no nome de exportação ou exportação padrão.

// As exportações nomeadas devem ser desestruturadas usando chaves. Exportações padrão não.
