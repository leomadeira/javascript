const imprimirNota = nota => {
  switch (
    Math.ceil(nota) // Switch não trabalha com floot, então precisamos colocar um math.ceil() para arredondar a nota ou colocar um Math.floor().
  ) {
      
    case 10: //Se não colocar um break em cada case, ele vai executar os de baixo ate chegar no break.
    case 9:
      console.log(`ALUNO EXCELENTE, APROVADO! ${nota} pontos`)
      break // nesse caso se a nota for 10, ele executa até aqui, nesse break.
    case 8:
    case 7: // a mesma coisa se aplica para os demais ex...
      console.log(`APROVADO! ${nota} pontos`)
      break
    case 6:
    case 5:
      console.log(`REPROVADO! COM DIREITO A RECUPERAÇÃO ${nota} pontos`)
      break
    case 4:
    case 3:
    case 2:
    case 1:
    case 0: // podemos colocar dessa forma tbm, p/ organizar de outro método
      console.log(
        `REPROVADO! SEM DIREITO A RECUPERAÇÃO ${nota} pontos. ATÉ 2022 `
      )
      break
    default:
      // Tudo o que nao estiver no valor de cada 'CASE', será default. mt interessante isso.
      console.log('Nota inválida')
      break
  }
}

imprimirNota()
