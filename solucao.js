const somatorio = (numero) => {

    let divisiveis = [];
    //esse loop vai verificar se o número é divisível por 3 ou 5, e salvá-lo em no vetor divisiveis
    for (let i = 1; i <= numero; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            divisiveis.push(i);
        }
    }

    let somatorio = 0;
    //esse loop vai somar o vetor divisiveis
    for (let j = 0; j < divisiveis.length; j++) {
        somatorio = somatorio + divisiveis[j];
    }
 
    console.log("Somatório: ", somatorio)
    return(somatorio);
}



//TESTE CASES:
console.log("---------TEST CASES----------");
for (let k = 0; k <= 20; k++) {
    
    console.log('Test Case', k);
    somatorio(k);
    
}
console.log("---------FIM DOS TEST CASES----------");

module.exports = {somatorio}; 