//matriz player
let a1 = 0;
let a2 = 0;
let a3 = 0;
let a4 = 0;
let a5 = 0;
let a6 = 0;
let a7 = 0;
let a8 = 0;
let a9 = 0;
let linha1 = [a1, a4, a7];
let linha2 = [a2, a5, a8];
let linha3 = [a3, a6, a9];
let coluna1 = [];
let coluna2 = [];
let coluna3 = [];
let dadosPlayer = [linha1, linha2, linha3];

function numDadoNoTurno()
{
    return (Math.floor(Math.random()*6))+1;
}

function acessaColunas()
{

    for(let i = 0; i < 3; i++){
        coluna1[i] = dadosPlayer[i][0];//acessa primeira coluna
    }
    for(let i = 0; i < 3; i++){
        coluna2[i] = dadosPlayer[i][1];//acessa segunda coluna
    }
    for(let i = 0; i < 3; i++){
        coluna3[i] = dadosPlayer[i][2];//acessa terceira coluna
    }

}

function atualizaValoresMatriz()
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
    
}

function colocaValorNasColunas()
{
    coluna1 = [a1,a2,a3];
    coluna2 = [a4,a5,a6];
    coluna3 = [a7,a8,a9];
}

//valores dos combos (se houver)
function verificaCombosC1()
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

function verificaCombosC2()
{
    let valorCombo = 0;

    if(coluna2[0] == coluna2[1])
    {
        valorCombo = ((coluna2[0]*coluna2[1])*2)+coluna2[2];
    }

    else if ( coluna2[0] == coluna2[2]) 
    {
        valorCombo = ((coluna2[0]*coluna2[2])*2)+coluna2[1];
    }
    
    else if ( coluna2[1] == coluna2[2]) 
    {
        valorCombo = ((coluna2[1]*coluna2[2])*2)+coluna2[0];
    }

    else if (coluna2[0] == coluna2[1] && coluna2[0] == coluna2[2])
    {
        valorCombo = (coluna2[0]*coluna2[1]*coluna2[2])*3;
    }

    else
    {
        valorCombo = coluna2[0] + coluna2[1] + coluna2[2]
    }
    return valorCombo;
}

function verificaCombosC3()
{
    let valorCombo = 0;

    if(coluna3[0] == coluna3[1])
    {
        valorCombo = ((coluna3[0]*coluna3[1])*2)+coluna3[2];
    }

    else if ( coluna3[0] == coluna3[2]) 
    {
        valorCombo = ((coluna3[0]*coluna3[2])*2)+coluna3[1];
    }
    
    else if ( coluna3[1] == coluna3[2]) 
    {
        valorCombo = ((coluna3[1]*coluna3[2])*2)+coluna3[0];
    }

    else if (coluna3[0] == coluna3[1] && coluna3[0] == coluna3[2])
    {
        valorCombo = (coluna3[0]*coluna3[1]*coluna3[2])*3;
    }

    else
    {
        valorCombo = coluna3[0] + coluna3[1] + coluna3[2]
    }
    return valorCombo;
}

//matriz bot
let linhab1 = [b1, b4, b7];
let linhab2 = [b2, b5, b8];
let linhab3 = [b3, b6, b9];
let colunab1 = [];
let colunab2 = [];
let colunab3 = [];
let dadosBot = [linhab1, linhab2, linhab3];

function acessaColunasMaq()
{

    for(let i = 0; i < 3; i++){
        colunab1[i] = dadosPlayer[i][0];//acessa primeira coluna
    }
    for(let i = 0; i < 3; i++){
        colunab2[i] = dadosPlayer[i][1];//acessa segunda coluna
    }
    for(let i = 0; i < 3; i++){
        colunab3[i] = dadosPlayer[i][2];//acessa terceira coluna
    }
}

function colocaValorNasColunasMaq()
{
    colunab1 = [b1,b2,b3];
    colunab2 = [b4,b5,b6];
    colunab3 = [b7,b8,b9];
}

function dadoMaq()
{
    numDadoNoTurno();
}


acessaColunas();
colocaValorNasColunas();
atualizaValoresMatriz();
console.log(colunab1);

