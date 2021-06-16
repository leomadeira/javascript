function CalcAgua(kg) {
    let total = 35 * kg
    total = total / 1000
    console.log(`Você precisa de ${total.toFixed(3)} L por dia`)
}
CalcAgua(200)

function pitagoras(b,c){
    let a = (b**2)+ (c**2)
    a = a**0.5 // raizQuadrada
    console.log(a)
}

pitagoras(3,5)
