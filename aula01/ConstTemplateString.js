let palavra = `uma palavra`

const template = `esta frase contém ${palavra}`
console.log(template) //Mesmo que o valor de "palavra" mude, a constante irá continuar com o valor inicial que foi declarado no momento da criação da variável

palavra = `outra palavra`
const outroTemplate = `esta frase contém ${palavra}`
console.log(outroTemplate)