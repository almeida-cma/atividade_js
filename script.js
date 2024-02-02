function calcularDesconto() {
   //instruçõs ...
}

function calcularJuros() {
    var capital = parseFloat(document.getElementById('capital').value);
    var taxaJuros = parseFloat(document.getElementById('taxaJuros').value);
    var periodo = parseInt(document.getElementById('periodo').value);

    if (isNaN(capital) || isNaN(taxaJuros) || isNaN(periodo)) {
        alert("Por favor, digite valores válidos.");
        return;
    }

    //instruções (var - 2 cálculos)
    document.getElementById('montanteComJuros').innerText = montanteComJuros.toFixed(2);
}

function calcularOperacao() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var operacao = document.getElementById('operacao').value;
    var numero2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, digite valores válidos.");
        return;
    }

    var resultado = 0;

    switch (operacao) {
        case 'soma':
            //instruções resultado
            break;
        case 'subtracao':
            //instruções resultado
            break;
        case 'multiplicacao':
            //instruções resultado
            break;
        case 'divisao':
            if (numero2 !== 0) {
                //instruções resultado
            } else {
                alert("Não é possível dividir por zero.");
                return;
            }
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    document.getElementById('resultado').innerText = resultado.toFixed(2);
}
