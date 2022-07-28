console.log("Tabela de Inss 2022 - Informe o seu salário")
let salario = 3000.0;
console.log("O seu salário é de: R$" + salario)

if (salario <= 1045.0) {
    console.log("E sua aliquota de 7,5%")
}
if (salario >= 1045.01 && salario <= 2089.60) {
    console.log("E sua aliquota de 9,0%")
} 
if ( salario >= 2089.61 && salario < 3134.40){
    console.log("E sua aliquota  de 12%")
}
if (salario >= 3134.41){
    console.log("E sua aliquota de 14%")
}


