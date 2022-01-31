let custosDasCompras = [];
let custoTotal =0;

function selecionarPrato (opcao){
    let reais = opcao.querySelector(".reais");
    let strReais = reais.innerHTML;
    let numReais = parseInt(strReais);
    let centavos = opcao.querySelector(".centavos");
    let strCentavos = centavos.innerHTML;
    strCentavos="0."+ strCentavos;
    let numCentavos = parseFloat(strCentavos);
    custosDasCompras[0]= (numReais+numCentavos).toFixed(2);
    
    console.log(custosDasCompras[0]);
}

function selecionarBebida (opcao){
    let reais = opcao.querySelector(".reais");
    let strReais = reais.innerHTML;
    let numReais = parseInt(strReais);
    let centavos = opcao.querySelector(".centavos");
    let strCentavos = centavos.innerHTML;
    strCentavos="0."+ strCentavos;
    let numCentavos = parseFloat(strCentavos);
    custosDasCompras[1]= (numReais+numCentavos).toFixed(2);
    
    console.log(custosDasCompras[1]);
}

function selecionarSobremesa (opcao){
    let reais = opcao.querySelector(".reais");
    let strReais = reais.innerHTML;
    let numReais = parseInt(strReais);
    let centavos = opcao.querySelector(".centavos");
    let strCentavos = centavos.innerHTML;
    strCentavos="0."+ strCentavos;
    let numCentavos = parseFloat(strCentavos);
    custosDasCompras[2]= (numReais+numCentavos).toFixed(2);
    
    console.log(custosDasCompras[2]);
}

