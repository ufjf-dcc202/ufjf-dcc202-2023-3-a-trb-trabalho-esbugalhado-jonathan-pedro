
const a1 = document.getElementById('a1'); 
const a2 = document.getElementById('a2'); 
const a3 = document.getElementById('a3'); 
const a4 = document.getElementById('a4'); 
const a5 = document.getElementById('a5'); 
const a6 = document.getElementById('a6'); 
const a7 = document.getElementById('a7'); 
const a8 = document.getElementById('a8'); 
const a9 = document.getElementById('a9');
const linha1 = [a1, a4, a7];
const linha2 = [a2, a5, a8];
const linha3 = [a3, a6, a9];
const coluna1 = [];
const coluna2 = [];
const coluna3 = [];
const dadosPlayer = [linha1, linha2, linha3];

const b1 = document.getElementById('b1'); 
const b2 = document.getElementById('b2'); 
const b3 = document.getElementById('b3'); 
const b4 = document.getElementById('b4'); 
const b5 = document.getElementById('b5'); 
const b6 = document.getElementById('b6'); 
const b7 = document.getElementById('b7'); 
const b8 = document.getElementById('b8'); 
const b9 = document.getElementById('b9');
const linhab1 = [b1, b4, b7];
const linhab2 = [b2, b5, b8];
const linhab3 = [b3, b6, b9];
const colunab1 = [];
const colunab2 = [];
const colunab3 = [];
const dadosBot = [linhab1, linhab2, linhab3];

export function getMatrizPlayer()
{
    return dadosPlayer;
}

export function getMatrizBot()
{
    return dadosBot;
}


export function numDadoNoTurno()
{
    return (Math.floor(Math.random()*6))+1;
}

export function acessaColunas(coluna1, coluna2, coluna3, matriz)
{

    for(let i = 0; i < 3; i++){
        coluna1[i] = matriz[i][0];//acessa primeira coluna
    }
    for(let i = 0; i < 3; i++){
        coluna2[i] = matriz[i][1];//acessa segunda coluna
    }
    for(let i = 0; i < 3; i++){
        coluna3[i] = matriz[i][2];//acessa terceira coluna

        return coluna1, coluna2, coluna3;

    }
}

export function atualizaValoresMatriz()
{
    
    for(let i = 0; i < 3; i++){
        dadosPlayer[i][0] = coluna1[i];
    }
    for(let i = 0; i < 3; i++){
        dadosPlayer[i][1] = coluna2[i];
    }
    for(let i = 0; i < 3; i++){
        dadosPlayer[i][2] = coluna3[i];
    }

    return dadosPlayer;
    
}

export function colocaValorNasColunas()
{
    coluna1 = [a1,a2,a3];
    coluna2 = [a4,a5,a6];
    coluna3 = [a7,a8,a9];
}

//valores dos combos (se houver)
export function verificaCombosC1()
{
    let valorCombo = 0;

    if(coluna1[0] == coluna1[1])
    {
        valorCombo = ((coluna1[0]+coluna1[1])*2)+coluna1[2];
    }

    else if ( coluna1[0] == coluna1[2]) 
    {
        valorCombo = ((coluna1[0]+coluna1[2])*2)+coluna1[1];
    }
    
    else if ( coluna1[1] == coluna1[2]) 
    {
        valorCombo = ((coluna1[1]+coluna1[2])*2)+coluna1[0];
    }

    else if (coluna1[0] == coluna1[1] && coluna1[0] == coluna1[2])
    {
        valorCombo = (coluna1[0]+coluna1[1]+coluna1[2])*3;
    }

    else
    {
        valorCombo = coluna1[0] + coluna1[1] + coluna1[2];
    }
    return valorCombo;
}

export function verificaCombosC2()
{
    let valorCombo2 = 0;

    if(coluna2[0] == coluna2[1])
    {
        valorCombo2 = ((coluna2[0]*coluna2[1])*2)+coluna2[2];
    }

    else if ( coluna2[0] == coluna2[2]) 
    {
        valorCombo2 = ((coluna2[0]*coluna2[2])*2)+coluna2[1];
    }
    
    else if ( coluna2[1] == coluna2[2]) 
    {
        valorCombo2 = ((coluna2[1]*coluna2[2])*2)+coluna2[0];
    }

    else if (coluna2[0] == coluna2[1] && coluna2[0] == coluna2[2])
    {
        valorCombo2 = (coluna2[0]*coluna2[1]*coluna2[2])*3;
    }

    else
    {
        valorCombo2 = coluna2[0] + coluna2[1] + coluna2[2]
    }
    return valorCombo2;
}

export function verificaCombosC3()
{
    let valorCombo3 = 0;

    if(coluna3[0] == coluna3[1])
    {
        valorCombo3 = ((coluna3[0]*coluna3[1])*2)+coluna3[2];
    }

    else if ( coluna3[0] == coluna3[2]) 
    {
        valorCombo3 = ((coluna3[0]*coluna3[2])*2)+coluna3[1];
    }
    
    else if ( coluna3[1] == coluna3[2]) 
    {
        valorCombo3 = ((coluna3[1]*coluna3[2])*2)+coluna3[0];
    }

    else if (coluna3[0] == coluna3[1] && coluna3[0] == coluna3[2])
    {
        valorCombo3 = (coluna3[0]*coluna3[1]*coluna3[2])*3;
    }

    else
    {
        valorCombo3 = coluna3[0] + coluna3[1] + coluna3[2]
    }
    return valorCombo3;
}


