import {getMatrizPlayer, getMatrizBot,colocaValorNasColunas, numDadoNoTurno, atualizaValoresMatriz, verificaCombosC1, verificaCombosC2, verificaCombosC3} from "./matriz.js";


let matrizBot = getMatrizBot();
let matrizPlayer = getMatrizPlayer();

function zeraMatriz(matriz){  
    for(let i =0; i <3;i++)
        {
            for(let l = 0; l<3;l++)
            {
                matriz[i][l] = 0;    
            }
        }
}

zeraMatriz(matrizBot);
zeraMatriz(matrizPlayer);


function rolaDadoBot()
{
    let resultado = numDadoNoTurno();
    console.log(resultado);
    
    let dadoDoBot = document.getElementById("dadoBot");
    dadoDoBot.textContent = resultado;

    return resultado;
}


function turnoDoBot() //primeiro turno
{
    let dado = rolaDadoBot();
    verificaLinhaB(matrizBot, dado);

}

turnoDoBot();