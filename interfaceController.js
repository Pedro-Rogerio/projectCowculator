const valorInicial=[];
const segundoValor=[];
const op =[];

///Números
function add1 (){
    valorInicial.push("1");
    atualizarVisor2();   
    
}

function add2 (){
    valorInicial.push("2");
    atualizarVisor2();
}

function add3 (){
    valorInicial.push("3");
    atualizarVisor2();
}

function add4 (){
    valorInicial.push("4");
    atualizarVisor2();
}

function add5 (){
    valorInicial.push("5");
    atualizarVisor2();
}

function add6 (){
    valorInicial.push("6");
    atualizarVisor2();
}

function add7 (){
    valorInicial.push("7");
    atualizarVisor2();
}

function add8 (){
    valorInicial.push("8");
    atualizarVisor2();
}

function add9 (){
    valorInicial.push("9");
    atualizarVisor2();
}

function add0 (){
    valorInicial.push("0");
    atualizarVisor2();
}

function addponto (){
    valorInicial.push(".");
    atualizarVisor2();
}

///Operações

function soma(){
    
    if (op!="") {
        igual();
        const valorTemp = valorInicial;
        const valorInicialString = valorTemp.toString();
        const valorInicialFloat = parseFloat(valorInicialString.replace(/,/g, ""));
        op.push("+");
        document.getElementById("visor1").innerHTML = valorInicialFloat; 
        document.getElementById("visorOperacao").innerHTML = "+";
        document.getElementById("visor2").innerHTML = 0;
        segundoValor.push(valorInicialFloat);
        zerarInicial();
    }
    else{
    const valorTemp = valorInicial;
    const valorInicialString = valorTemp.toString();
    const valorInicialFloat = parseFloat(valorInicialString.replace(/,/g, ""));
    op.push("+");
    document.getElementById("visor1").innerHTML = valorInicialFloat; 
    document.getElementById("visorOperacao").innerHTML = "+";
    document.getElementById("visor2").innerHTML = 0;
    segundoValor.push(valorInicialFloat);

    zerarInicial();
    }
    
}

function subtracao(){
    
    if (op!="") {
        igual();
        const valorTemp = valorInicial;
        const valorInicialString = valorTemp.toString();
        const valorInicialFloat = parseFloat(valorInicialString.replace(/,/g, ""));
        op.push("-");
        document.getElementById("visor1").innerHTML = valorInicialFloat; 
        document.getElementById("visorOperacao").innerHTML = "-";
        document.getElementById("visor2").innerHTML = 0;
        segundoValor.push(valorInicialFloat);
        zerarInicial();
    }
    else{
    const valorTemp = valorInicial;
    const valorInicialString = valorTemp.toString();
    const valorInicialFloat = parseFloat(valorInicialString.replace(/,/g, ""));
    op.push("-");
    document.getElementById("visor1").innerHTML = valorInicialFloat; 
    document.getElementById("visorOperacao").innerHTML = "-";
    document.getElementById("visor2").innerHTML = 0;
    segundoValor.push(valorInicialFloat);

    zerarInicial();
    }
}

function multiplicacao(){

    if (op!="") {
        igual();
        const valorTemp = valorInicial;
        const valorInicialString = valorTemp.toString();
        const valorInicialFloat = parseFloat(valorInicialString.replace(/,/g, ""));
        op.push("X");
        document.getElementById("visor1").innerHTML = valorInicialFloat; 
        document.getElementById("visorOperacao").innerHTML = "X";
        document.getElementById("visor2").innerHTML = 0;
        segundoValor.push(valorInicialFloat);
        zerarInicial();
    }
    else{
    const valorTemp = valorInicial;
    const valorInicialString = valorTemp.toString();
    const valorInicialFloat = parseFloat(valorInicialString.replace(/,/g, ""));
    op.push("X");
    document.getElementById("visor1").innerHTML = valorInicialFloat; 
    document.getElementById("visorOperacao").innerHTML = "X";
    document.getElementById("visor2").innerHTML = 0;
    segundoValor.push(valorInicialFloat);

    zerarInicial();
    }
    }

function divisao(){
    if (op!="") {
        igual();
        const valorTemp = valorInicial;
        const valorInicialString = valorTemp.toString();
        const valorInicialFloat = parseFloat(valorInicialString.replace(/,/g, ""));
        op.push("%");
        document.getElementById("visor1").innerHTML = valorInicialFloat; 
        document.getElementById("visorOperacao").innerHTML = "%";
        document.getElementById("visor2").innerHTML = 0;
        segundoValor.push(valorInicialFloat);
        zerarInicial();
    }
    else{
    const valorTemp = valorInicial;
    const valorInicialString = valorTemp.toString();
    const valorInicialFloat = parseFloat(valorInicialString.replace(/,/g, ""));
    op.push("%");
    document.getElementById("visor1").innerHTML = valorInicialFloat; 
    document.getElementById("visorOperacao").innerHTML = "%";
    document.getElementById("visor2").innerHTML = 0;
    segundoValor.push(valorInicialFloat);

    zerarInicial();
    } 
}

function igual() {
    const valorTemp = valorInicial;
    const valorInicialString = valorTemp.toString();
    const valorInicialFloat = parseFloat(valorInicialString.replace(/,/g, ""));

///convertendo segundo valor para float
    const valorTemp2 = segundoValor;
    const valorInicialString2 = valorTemp2.toString();
    const valorInicialFloat2 = parseFloat(valorInicialString2.replace(/,/g, ""));


    const opString = op.toString();

    

    if(opString=="+"){
        
        zerarInicial();
        zerarValor2();
       const resultado = valorInicialFloat2 + valorInicialFloat;
              
       valorInicial.push(resultado);
       console.log(resultado);
       document.getElementById("visor1").innerHTML = valorInicial;
       document.getElementById("visorOperacao").innerHTML = " ";
       document.getElementById("visor2").innerHTML = " ";
       op.pop();
       }
    if(opString=="-"){
        
        zerarInicial();
        zerarValor2();
       const resultado = valorInicialFloat2 - valorInicialFloat;
              
       valorInicial.push(resultado);
       console.log(resultado);
       document.getElementById("visor1").innerHTML = valorInicial;
       document.getElementById("visorOperacao").innerHTML = " ";
       document.getElementById("visor2").innerHTML = " ";
       op.pop();
       }
    if(opString=="X"){
        
        zerarInicial();
        zerarValor2();
       const resultado = valorInicialFloat2 * valorInicialFloat;
              
       valorInicial.push(resultado);
       console.log(resultado);
       document.getElementById("visor1").innerHTML = valorInicial;
       document.getElementById("visorOperacao").innerHTML = " ";
       document.getElementById("visor2").innerHTML = " ";
       op.pop();
       }
    if(opString=="%"){
        
        zerarInicial();
        zerarValor2();
       const resultado = valorInicialFloat2 / valorInicialFloat;
              
       valorInicial.push(resultado);
       console.log(resultado);
       document.getElementById("visor1").innerHTML = valorInicial;
       document.getElementById("visorOperacao").innerHTML = " ";
       document.getElementById("visor2").innerHTML = " ";
       op.pop();
       } 
      }

///Utilidades

function apagar() {
    valorInicial.pop();
    atualizarVisor2();
}

///Atualização de visor 2

function atualizarVisor2() {
    const valorInicialString = valorInicial.toString();
    const valorInicialFloat = valorInicialString.replace(/,/g, "");
    document.getElementById("visor2").innerHTML = valorInicialFloat;
}

///Zerar valor inicial
function zerarInicial() {
    while(valorInicial.length>0){
        valorInicial.pop();
        valorInicial.shift();
        //console.log(valorInicial);
    }
}

///Zerar segundo valor
function zerarValor2() {
    while(segundoValor.length>0){
        segundoValor.pop();
        segundoValor.shift();
        //console.log(valorInicial);
    }
}

///Resetar
function resetar() {
    while(op.length>0){
        op.pop();
    }
    zerarInicial();
    zerarValor2();
    document.getElementById("visor1").innerHTML = " "; 
    document.getElementById("visorOperacao").innerHTML = " ";
    document.getElementById("visor2").innerHTML = " ";
}
    
///Som de vaca
var mu = new Audio();
mu.src = "vacaMugindo.mp3";

function vaca(){
    document.getElementById("visor2").innerHTML = "VACA"; 
}



