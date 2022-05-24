//Variável global que busca o elemento "visor"
let inputResultado = document.getElementById("inputCalculadora");

let calculo = {
    valorSalvo: null,
    funcaoParaCalcular: null
}

//Ao carregar a página ele fica esperando clicar nos botões e atribuir os eventos.
window.addEventListener("load", function(){
    atribuirEventos();
})

//Atribui eventos aos números
function atribuirEventos() {
    document.getElementById("btnValor0").addEventListener("click", inserirNumero);
    document.getElementById("btnValor1").addEventListener("click", inserirNumero);
    document.getElementById("btnValor2").addEventListener("click", inserirNumero);
    document.getElementById("btnValor3").addEventListener("click", inserirNumero);
    document.getElementById("btnValor4").addEventListener("click", inserirNumero);
    document.getElementById("btnValor5").addEventListener("click", inserirNumero);
    document.getElementById("btnValor6").addEventListener("click", inserirNumero);
    document.getElementById("btnValor7").addEventListener("click", inserirNumero);
    document.getElementById("btnValor8").addEventListener("click", inserirNumero);
    document.getElementById("btnValor9").addEventListener("click", inserirNumero);
}

//Atribui eventoss aos botões de operadores.
document.getElementById("btnPonto").addEventListener("click", inserirNumero);
document.getElementById("btnSoma").addEventListener("click", clicarOperador);
document.getElementById("btnDividir").addEventListener("click", clicarOperador);
document.getElementById("btnMultiplicar").addEventListener("click", clicarOperador);
document.getElementById("btnSubtrair").addEventListener("click", clicarOperador);
document.getElementById("btnLimpar").addEventListener("click", limparDados);
document.getElementById("btnResultado").addEventListener("click", clicarResultado);

//Adiciona o número no visor
function inserirNumero() {
    if (isNaN(inputResultado.value)) {
        inputResultado.value = event.target.textContent;
    }else {
        if(inputResultado.value == 0) {
            inputResultado.value = event.target.textContent;
        }else {
            inputResultado.value += event.target.textContent;
        }
    }
}

function somar (valor1, valor2) {
    return valor1 + valor2;
}

function Subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir (valor1, valor2) {
    if(valor2 === 0) {
        return "Erro, não é possível dividir um número por zero!";
    }else {
        return valor1 / valor2; 
    }
}

//Limpa o visor e os dados do cálculo 
function limparDados() {
    inputResultado.value = "";
    calculo.valorSalvo = null;
    calculo.funcaoParaCalcular = null;
}

function inserirPonto() {
    if(inputResultado.value === "" || isNaN(inputResultado.value)) {
        inputResultado.value = "0.";
    }else if (!inputResultado.value.includes(".")) {
        inputResultado.value = inputResultado.value = ".";
    }
}

//Atribui a funcção de acordo com o tipo de operador clicado
function atribuirOperacao(operador) {
    if(operador === "+") {
        calculo.funcaoParaCalcular = somar;
    }else if (operador === "-") {
        calculo.funcaoParaCalcular = Subtrair
    }else if (operador == "*") {
        calculo.funcaoParaCalcular = multiplicar
    }else {
        calculo.funcaoParaCalcular = dividir;
    }
}

//Atualiza valores de cálculo
function clicarOperador() {
    if(!isNaN(inputResultado.value)) {
        if(calculo.valorSalvo == null) {
            calculo.valorSalvo = Number(inputResultado.value);
        }else if (calculo.funcaoParaCalcular != null) {
            calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
        }
    }
    let operador = event.target.textContent;
    atribuirOperacao(operador);
    inputResultado.value = operador;
}

//Exibe resultado no visor 
function clicarResultado() {
    if(!isNaN(inputResultado.value) && calculo.funcaoParaCalcular != null) {
        let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
        inputResultado.value = resultado;
        calculo.valorSalvo = resultado;
        calculo.funcaoParaCalcular = null;
    }
}
