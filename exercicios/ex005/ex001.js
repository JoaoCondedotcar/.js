var vel = 81
var maxvel = 80
console.log(`A sua velocidade é ${vel}Km/h`)
if (vel > maxvel) {
    console.log(`Você estava a ${vel}Km/h e por conta disso ultrapassou a velocidade permitida em ${((vel/maxvel)*100)-100}%, que é de ${maxvel}Km/h, consulte o valor da multa no site.`)
} else {
    console.log(`Obrigado por respeitar as leis de trânsito!`)
}
console.log(`Dirija sempre usando cinto de segurança!`)