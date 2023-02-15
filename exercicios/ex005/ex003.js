var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${min} minutos.`)
if (hora < 6) {
    console.log(`Aproveite a madrugada!`)
} else if (hora < 12) {
    console.log(`Tenha um Bom Dia!`)
} else if (hora < 18) {
    console.log(`Tenha uma Boa Tarde!`)
} else {
    console.log(`Tenha uma Boa Noite`)
}
