let peso = 70
let altura = 1.69
let imc = 0

imc = peso / (altura * altura);

if (imc<10) {
    console.log('Desnutrição mais fudido que existe. CUIDADO!')
}
else if(imc>10 || imc<=12.9){ 
    console.log('caso2')
}
else if(imc>18.5 || imc<=24.9){
    console.log('Tu és foda, parceiro!')
}





console.log(imc)

