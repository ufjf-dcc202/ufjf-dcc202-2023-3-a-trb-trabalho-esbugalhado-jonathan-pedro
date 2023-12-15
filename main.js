import {getMatriz, colocaValorNasColunas, numDadoNoTurno, atualizaValoresMatriz} from "./matriz.js";

getMatriz();

function rolaDadoBot()
{
    let resultado = numDadoNoTurno();
    console.log(resultado);
    
    let dadoDoBot = document.getElementById("dadoBot");
    dadoDoBot.textContent = resultado;

    return resultado;
}

function colocaNaLinha(numeroLinha, valor)
{
    atualizaValoresMatriz();
    colocaValorNasColunas();
    if (numeroLinha >= 0 && numeroLinha < 3) {
        dadosPlayer[numeroLinha][0] = valor; // Define o valor na coluna1[0] da linha desejada
        atualizaValoresMatriz();
    }
}   


function turnoDoBot() //primeiro turno
{
    let resultado = numDadoNoTurno();
    rolaDadoBot();
    colocaNaLinha(0, resultado);
}


turnoDoBot();

