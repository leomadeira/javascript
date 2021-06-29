Number.prototype.entre = function (inicio,fim) {
    return this >= inicio && this <= fim // essa função vai retornar Se (inicio for menor ou igual que this && se this for menor ou igual que fim)
}

const imprimirResultado = nota => {
    if (nota.entre(9,10)) {
        console.log('ALUNO EXCELENTE, APROVADO!')
    }
    else if (nota.entre(7,8.9)) {
        console.log('APROVADO')
    }
    else if (nota.entre(5,6.9)) {
        console.log('REPROVADO! COM DIREITO A RECUPERAÇÃO')
    }
    else if (nota.entre(0,4.9)) {
        console.log('REPROVADO! SEM DIREITO A RECUPERAÇÃO. ATÉ 2022')
    }
    else{
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6.9)
imprimirResultado(5)
imprimirResultado(4)
imprimirResultado(-1)
imprimirResultado(11)
