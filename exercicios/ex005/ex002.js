var idade = 16
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 60) {
    console.log(`Seu voto é opcional`)
} else {
    console.log(`Seu voto é obrigatório`)
}
