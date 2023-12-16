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
function rolaDadoPlayer()
{
    let resultado = numDadoNoTurno();
    console.log(resultado);
    
    let dadoJogador = document.getElementById("dadoJogador");
    dadoJogador.innerHTML = resultado;

    return resultado;
}

function verificaLinhaB(matriz, dadoNaRodada)
{
    if(matriz[0][0] === 0)
    {
        matriz[0][0] = dadoNaRodada;
        document.getElementById("b3").innerHTML= dadoNaRodada;
    }
    else if(matriz[0][1] === 0)
    {
        matrizBot[0][1] = dadoNaRodada;
        document.getElementById("b2").innerHTML= dadoNaRodada;
    }
    else if(matriz[0][2] === 0)
    {
        matrizBot[0][2] = dadoNaRodada;
        document.getElementById("b1").innerHTML= dadoNaRodada;
    }
}
function verificaLinhaPlayerC1(matriz, dadoNaRodada)
{
    if(matriz[0][0] === 0)
    {
        matriz[0][0] = dadoNaRodada;
        document.getElementById("a1").innerHTML= dadoNaRodada;
    }
    else if(matriz[0][1] === 0)
    {
        matriz[0][1] = dadoNaRodada;
        document.getElementById("a2").innerHTML= dadoNaRodada;
    }
    else if(matriz[0][2] === 0)
    {
        matriz[0][2] = dadoNaRodada;
        document.getElementById("a3").innerHTML= dadoNaRodada;
    }
}



function verificaLinhaPlayerC2(matriz, dadoNaRodada){
    if(matriz[1][0] === 0)
    {
            matriz[1][0] = dadoNaRodada;
            document.getElementById("a4").innerHTML= dadoNaRodada;
        }
        else if(matriz[1][1] === 0)
        {
            matriz[1][1] = dadoNaRodada;
            document.getElementById("a5").innerHTML= dadoNaRodada;
        }
        else if(matriz[1][2] === 0)
        {
            matriz[1][2] = dadoNaRodada;
            document.getElementById("a6").innerHTML= dadoNaRodada;
        }
    }
    
    function verificaLinhaPlayerC3(matriz, dadoNaRodada)
    {
        if(matriz[2][0] === 0)
        {
            matriz[2][0] = dadoNaRodada;
            document.getElementById("a7").innerHTML= dadoNaRodada;
        }
        else if(matriz[2][1] === 0)
        {
            matriz[2][1] = dadoNaRodada;
            document.getElementById("a8").innerHTML= dadoNaRodada;
        }
        else if(matriz[2][2] === 0)
        {
            matriz[2][2] = dadoNaRodada;
            document.getElementById("a9").innerHTML= dadoNaRodada;
        }
        
    }
    
    function escolhaPlayer(dado)
    {
        let col1 = document.getElementById("colunaInf1");
        col1.addEventListener("click", function(){
            verificaLinhaPlayerC1(matrizPlayer, dado);
        });
    
        let col2 = document.getElementById("colunaInf2");
        col2.addEventListener("click", function(){
            verificaLinhaPlayerC2(matrizPlayer, dado);
        });
    
        let col3 = document.getElementById("colunaInf3");
        col3.addEventListener("click", function(){
            verificaLinhaPlayerC3(matrizPlayer, dado);
        });
    }
    
    
    
function turnoDoBot() //primeiro turno
{
    let dado = rolaDadoBot();
    verificaLinhaB(matrizBot, dado);

}
function turnoDoPlayer() //primeiro turno
{
    let dado = rolaDadoPlayer();
    escolhaPlayer(dado);

}

turnoDoBot();