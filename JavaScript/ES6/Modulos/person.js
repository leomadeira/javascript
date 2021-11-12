import { name, idade } from "./person.js";
//Modulos é muito importante entender, pois com ele que permite você divida seu código em arquivos separados.
// Isso torna mais fácil manter a base de código.
// Os Módulos ES contam com as instruções (importe e export). //importar e exportar

//*****Exportar*******//
// Você pode exportar uma função ou variável de qualquer arquivo.
// Vamos criar um arquivo chamado person.jse preenchê-lo com o que queremos exportar.
// Existem dois tipos de exportação: Nomeada e Padrão.

//Ex1:

export const name = 'Leonardo'
export const idade = 25

//ex2:

const cidade = 'Florianopolis'
const bairro = 'Centro'

export {cidade, bairro} 

// Exportações padrão
// Vamos criar outro arquivo, denominado message.js, e usá-lo para demonstrar a exportação padrão.

// Você só pode ter uma exportação padrão em um arquivo.


