function CalcAgua(kg) {
    let total = 35 * kg
    total = total / 1000
    console.log(`Você precisa de ${total.toFixed(3)} L por dia`)
}
CalcAgua(200)