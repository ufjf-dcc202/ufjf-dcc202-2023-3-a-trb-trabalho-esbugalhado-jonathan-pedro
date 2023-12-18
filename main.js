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

function verificaLinhaPlayerC2(matriz, dadoNaRodada)
{
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
    
function escolhaPlayer(dado) {
    let col1 = document.getElementById("colunaInf1");
    col1.addEventListener("click", function() {
        verificaLinhaPlayerC1(matrizPlayer, dado);
        afereSomaPlayer(0, matrizPlayer);
        col1.removeEventListener("click", col1Callback); // Removendo o event listener após a jogada
    });
    
    let col2 = document.getElementById("colunaInf2");
    col2.addEventListener("click", function() {
        verificaLinhaPlayerC2(matrizPlayer, dado);
        afereSomaPlayer(1, matrizPlayer);
        col2.removeEventListener("click", col2Callback); // Removendo o event listener após a jogada
    });
    
    let col3 = document.getElementById("colunaInf3");
    col3.addEventListener("click", function() {
        verificaLinhaPlayerC3(matrizPlayer, dado);
        afereSomaPlayer(2, matrizPlayer);
        col3.removeEventListener("click", col3Callback); // Removendo o event listener após a jogada
    });

    // Funções internas para os event listeners, removendo-os após a jogada
    function col1Callback() {
        verificaLinhaPlayerC1(matrizPlayer, dado);
        afereSomaPlayer(0, matrizPlayer);
        col1.removeEventListener("click", col1Callback);
    }

    function col2Callback() {
        verificaLinhaPlayerC2(matrizPlayer, dado);
        afereSomaPlayer(1, matrizPlayer);
        col2.removeEventListener("click", col2Callback);
    }

    function col3Callback() {
        verificaLinhaPlayerC3(matrizPlayer, dado);
        afereSomaPlayer(2, matrizPlayer);
        col3.removeEventListener("click", col3Callback);
    }
}
    
    
    
function turnoDoBot() //primeiro turno
{
    let dado = rolaDadoBot();
    verificaLinhaB(matrizBot, dado);
    afereSomaBot(0,matrizBot);
    afereSomaBot(1,matrizBot);
    afereSomaBot(2,matrizBot);

}
function turnoDoPlayer() //primeiro turno
{
    let dado = rolaDadoPlayer();
    escolhaPlayer(dado);
    

}

function afereSomaBot(pos, matriz) 
{
    let soma=0;
    
  for(let j=0;j<3;j++)
    {
        soma += matriz[pos][j];
    }

  if (pos === 0){
        let t1 = document.getElementById("t1");
        t1.innerHTML = soma;
    }
    
}

function afereSomaPlayer(pos, matriz) 
{
    let soma=0;
    
  for(let j=0;j<3;j++)
    {
        soma += matriz[pos][j];
    }

    if (pos === 0){
            let t4 = document.getElementById("t4");
            t4.innerHTML = soma;
        }
    if (pos === 1){
        let t5 = document.getElementById("t5");
        t5.innerHTML = soma;
    }
    if (pos === 2){
        let t6 = document.getElementById("t6");
        t6.innerHTML = soma;
    }
    
}

let jogoRoda = true;

function verificaFinalDoJogo(matriz)
{
    for(let i=0; i<3; i++)
    {
        for (let j = 0; j<3; j++)
        {
            if (matriz[i][j] === 0)
            {
                return false;
            }
        }
    }
    return true;
}

function partida()
{
    zeraMatriz(matrizBot);
    zeraMatriz(matrizPlayer);

    while(jogoRoda)
    {
        turnoDoBot();
        turnoDoPlayer();
        if(!verificaFinalDoJogo(matrizPlayer) && !verificaFinalDoJogo(matrizBot))
        {
            turnoDoPlayer();
            if(verificaFinalDoJogo(matrizPlayer))
            {
                jogoRoda=false;
                break;
            }
            turnoDoBot();
            if(verificaFinalDoJogo(matrizBot))
            {
                jogoRoda=false;
                break;
            }
            else
            {
                jogoRoda=false;
            }
        }
        
    }
    
    
}

partida();