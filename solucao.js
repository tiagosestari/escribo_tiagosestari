const somatorio = (numero) => {

    let divisiveis = [];
    //esse loop vai verificar se o número é divisível por 3 ou 5, e salvá-lo em no vetor divisiveis
    for (let i = 1; i <= numero; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            divisiveis.push(i);
        }
    }

    //Teste:
    console.log("Os divisores são: ", divisiveis);

    let somatorio = 0;
    //esse loop vai somar o vetor divisiveis
    for (let j = 0; j < divisiveis.length; j++) {
        somatorio = somatorio + divisiveis[j];
    }
    
    //Teste:
    console.log("O somatório é: ", somatorio);

    return(somatorio);
}



//TESTE CASES:
somatorio(9);
somatorio(10);