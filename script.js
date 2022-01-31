let custosDasCompras = [];
let custoTotal =0;
let habilitarPedido = [false,false,false];
let opcoesEscolhidas = []; //para guardar o nome dos pedidos
let mensagemDoPedido = "";

function selecionarPrato (opcao){
    let anteriorSelecionado = document.querySelector("section.pratos .selecionado");
    let ionIcon ;
    
    if(anteriorSelecionado!=null){
        ionIcon = anteriorSelecionado.querySelector(".selecionadoSticky");
        anteriorSelecionado.classList.remove("selecionado");
        ionIcon.classList.add("invisivel");
    }

    opcao.classList.add("selecionado");
    ionIcon = opcao.querySelector(".selecionadoSticky");
    ionIcon.classList.remove("invisivel");

    let reais = opcao.querySelector(".reais");
    let strReais = reais.innerHTML;
    let numReais = parseInt(strReais);
    let centavos = opcao.querySelector(".centavos");
    let strCentavos = centavos.innerHTML;
    strCentavos="0."+ strCentavos;
    let numCentavos = parseFloat(strCentavos);
    custosDasCompras[0]= (numReais+numCentavos).toFixed(2);
    habilitarPedido[0]=true;

    verificarHabilitacaoDoPedido();
    
}

function selecionarBebida (opcao){
    let anteriorSelecionado = document.querySelector("section.bebidas .selecionado");
    let ionIcon ;
    
    if(anteriorSelecionado!=null){
        ionIcon = anteriorSelecionado.querySelector(".selecionadoSticky");
        anteriorSelecionado.classList.remove("selecionado");
        ionIcon.classList.add("invisivel");
    }

    opcao.classList.add("selecionado");
    ionIcon = opcao.querySelector(".selecionadoSticky");
    ionIcon.classList.remove("invisivel");

    let reais = opcao.querySelector(".reais");
    let strReais = reais.innerHTML;
    let numReais = parseInt(strReais);
    let centavos = opcao.querySelector(".centavos");
    let strCentavos = centavos.innerHTML;
    strCentavos="0."+ strCentavos;
    let numCentavos = parseFloat(strCentavos);
    custosDasCompras[1]= (numReais+numCentavos).toFixed(2);
    habilitarPedido[1]=true;

    verificarHabilitacaoDoPedido();
}

function selecionarSobremesa (opcao){
    let anteriorSelecionado = document.querySelector("section.sobremesas .selecionado");
    let ionIcon ;
    
    if(anteriorSelecionado!=null){
        ionIcon = anteriorSelecionado.querySelector(".selecionadoSticky");
        anteriorSelecionado.classList.remove("selecionado");
        ionIcon.classList.add("invisivel");
    }

    opcao.classList.add("selecionado");
    ionIcon = opcao.querySelector(".selecionadoSticky");
    ionIcon.classList.remove("invisivel");

    let reais = opcao.querySelector(".reais");
    let strReais = reais.innerHTML;
    let numReais = parseInt(strReais);
    let centavos = opcao.querySelector(".centavos");
    let strCentavos = centavos.innerHTML;
    strCentavos="0."+ strCentavos;
    let numCentavos = parseFloat(strCentavos);
    custosDasCompras[2]= (numReais+numCentavos).toFixed(2);
    habilitarPedido[2]=true;

    verificarHabilitacaoDoPedido();    
}

function verificarHabilitacaoDoPedido(){
    
    if(habilitarPedido[0]===true && habilitarPedido[1]===true && habilitarPedido[2]===true ){
        let botaoSelecione3 = document.querySelector("footer .selecione3");
        let botaoFecharPedido= document.querySelector("footer .fecharPedido");

        botaoSelecione3.classList.add("invisivel");
        botaoFecharPedido.classList.remove("invisivel");
    }
    
}

function mensagemPedido (){
    let numCustosDasCompras = 0;
    for(let i=0; i< custosDasCompras.length; i++){
        custoTotal+=custosDasCompras[i];
    }
    custoTotal = numCustosDasCompras[0]+numCustosDasCompras[1]+numCustosDasCompras[2];
    mensagemDoPedido = `Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ ${custoTotal}`

    console.log(custoTotal);
}

