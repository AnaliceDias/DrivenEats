let custoTotal =0;
let habilitarPedido = [false,false,false];
let mensagemDoPedido = "";
let telefone = "5583999999999"
let caminhoMensagem = `https://api.whatsapp.com/send?phone=${telefone}`
let prato = {nome: "", preco: 0};
let bebida = {nome: "", preco: 0};
let sobremesa = {nome: "", preco: 0};

function selecionarPrato (opcao){
    let anteriorSelecionado = document.querySelector("section.pratos .selecionado");
    let ionIcon ;
    let nomeOpcao = opcao.querySelector(".nome").innerHTML;
    
    if(anteriorSelecionado!=null){
        ionIcon = anteriorSelecionado.querySelector(".selecionadoSticky");
        anteriorSelecionado.classList.remove("selecionado");
        ionIcon.classList.add("invisivel");
    }

    opcao.classList.add("selecionado");
    ionIcon = opcao.querySelector(".selecionadoSticky");
    ionIcon.classList.remove("invisivel");

    let preco = precoDoItem(opcao);
    mensagemPedido("prato", nomeOpcao, preco )

    habilitarPedido[0]=true;
    verificarHabilitacaoDoPedido();
    
}

function selecionarBebida (opcao){
    let anteriorSelecionado = document.querySelector("section.bebidas .selecionado");
    let ionIcon ;
    let nomeOpcao = opcao.querySelector(".nome").innerHTML;
    
    if(anteriorSelecionado!=null){
        ionIcon = anteriorSelecionado.querySelector(".selecionadoSticky");
        anteriorSelecionado.classList.remove("selecionado");
        ionIcon.classList.add("invisivel");
    }

    opcao.classList.add("selecionado");
    ionIcon = opcao.querySelector(".selecionadoSticky");
    ionIcon.classList.remove("invisivel");

    let preco = precoDoItem(opcao);
    mensagemPedido("bebida", nomeOpcao, preco );

    habilitarPedido[1]=true;
    verificarHabilitacaoDoPedido();
}

function selecionarSobremesa (opcao){
    let anteriorSelecionado = document.querySelector("section.sobremesas .selecionado");
    let ionIcon ;
    let nomeOpcao = opcao.querySelector(".nome").innerHTML;

    if(anteriorSelecionado!=null){
        ionIcon = anteriorSelecionado.querySelector(".selecionadoSticky");
        anteriorSelecionado.classList.remove("selecionado");
        ionIcon.classList.add("invisivel");
    }

    opcao.classList.add("selecionado");
    ionIcon = opcao.querySelector(".selecionadoSticky");
    ionIcon.classList.remove("invisivel");

    let preco = precoDoItem(opcao);
    mensagemPedido("sobremesa", nomeOpcao, preco )

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

function mensagemPedido (opcao, nomeDaOpcao, precoDaOpcao){

    if(opcao === "prato"){
        prato.nome = nomeDaOpcao.replace(" ", "%20") + "%0A%20%20%20%20";
        prato.preco = parseFloat(precoDaOpcao);
    } else if (opcao === "bebida") {
        bebida.nome = nomeDaOpcao.replace(" ", "%20") + "%0A%20%20%20%20";
        bebida.preco = parseFloat(precoDaOpcao);
    }else{
        sobremesa.nome = nomeDaOpcao.replace(" ", "%20") + "%0A%20%20%20%20";
        sobremesa.preco = parseFloat(precoDaOpcao);
    }
    custoTotal = (prato.preco + bebida.preco + sobremesa.preco).toFixed(2);
    
    mensagemDoPedido = caminhoMensagem + `&text=Ol%C3%A1,%20gostaria%20de%20fazer%20o%20pedido:%0A%20%20%20%20-%20Prato:%20${prato.nome}%0A%20%20%20%20-%20Bebida:%20${bebida.nome}%0A%20%20%20%20-%20Sobremesa:%20${sobremesa.nome}%0A%20%20%20%20Total:%20R$%20 ${custoTotal}`;

}

function precoDoItem(opcao){
    let strReais = opcao.querySelector(".reais").innerHTML;
    let numReais = parseInt(strReais);
    let strCentavos = opcao.querySelector(".centavos").innerHTML;
    strCentavos="0."+ strCentavos;
    let numCentavos = parseFloat(strCentavos);

    let preco = (numReais+numCentavos).toFixed(2);
    return preco;
}

function finalizarPedido() {
    return mensagemDoPedido;
}
