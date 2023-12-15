import {numDadoNoTurno} from "./matriz.js";

function turnoDoBot() //primeiro turno
{
    let resultado = numDadoNoTurno();
    
}

function rolaDado()
{
    let resultado = numDadoNoTurno();
    console.log(numDadoNoTurno());

    let elementoqI = document.getElementById("dadoPlayer");
    elementoqI.textContent = resultado;
}


document.getElementById("colunaInf1").addEventListener("click",rolaDado);

