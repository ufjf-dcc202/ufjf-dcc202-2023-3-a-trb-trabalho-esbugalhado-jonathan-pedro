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

//valores dos combos (se houver) [player]
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

function verificaCombosC3()
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

let b1 = 0;
let b2 = 0;
let b3 = 0;
let b4 = 0;
let b5 = 0;
let b6 = 0;
let b7 = 0;
let b8 = 0;
let b9 = 0;
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
        colunab1[i] = dadosBot[i][0];//acessa primeira coluna
    }
    for(let i = 0; i < 3; i++){
        colunab2[i] = dadosBot[i][1];//acessa segunda coluna
    }
    for(let i = 0; i < 3; i++){
        colunab3[i] = dadosBot[i][2];//acessa terceira coluna
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

//valores dos combos (se houver) [bot]

function verificaCombosM1()
{
    let valorComboM = 0;

    if(colunab1[0] == colunab1[1])
    {
        valorComboM = ((colunab1[0]+colunab1[1])*2)+colunab1[2];
    }

    else if ( colunab1[0] == colunab1[2]) 
    {
        valorComboM = ((colunab1[0]+colunab1[2])*2)+colunab1[1];
    }
    
    else if ( colunab1[1] == colunab1[2]) 
    {
        valorComboM = ((colunab1[1]+colunab1[2])*2)+colunab1[0];
    }

    else if (colunab1[0] == colunab1[1] && colunab1[0] == colunab1[2])
    {
        valorComboM = (colunab1[0]+colunab1[1]+colunab1[2])*3;
    }

    else
    {
        valorComboM = colunab1[0] + colunab1[1] + colunab1[2];
    }
    return valorComboM;
}

function verificaCombosM2()
{
    let valorComboM = 0;

    if(colunab2[0] == colunab2[1])
    {
        valorComboM = ((colunab2[0]+colunab2[1])*2)+colunab2[2];
    }

    else if ( colunab2[0] == colunab2[2]) 
    {
        valorComboM = ((colunab2[0]+colunab2[2])*2)+colunab2[1];
    }
    
    else if ( colunab2[1] == colunab2[2]) 
    {
        valorComboM = ((colunab2[1]+colunab2[2])*2)+colunab2[0];
    }

    else if (colunab2[0] == colunab2[1] && colunab2[0] == colunab2[2])
    {
        valorComboM = (colunab2[0]+colunab2[1]+colunab2[2])*3;
    }
    
    else
    {
        valorComboM = colunab2[0] + colunab2[1] + colunab2[2];
    }
    return valorComboM;
}

function verificaCombosM3()
{
    let valorComboM = 0;

    if(colunab3[0] == colunab3[1])
    {
        valorComboM = ((colunab3[0]+colunab3[1])*2)+colunab3[2];
    }

    else if ( colunab3[0] == colunab3[2]) 
    {
        valorComboM = ((colunab3[0]+colunab3[2])*2)+colunab3[1];
    }
    
    else if ( colunab3[1] == colunab3[2]) 
    {
        valorComboM = ((colunab3[1]+colunab3[2])*2)+colunab3[0];
    }

    else if (colunab3[0] == colunab3[1] && colunab3[0] == colunab3[2])
    {
        valorComboM = (colunab3[0]+colunab3[1]+colunab3[2])*3;
    }
    
    else
    {
        valorComboM = colunab3[0] + colunab3[1] + colunab3[2];
    }
    return valorComboM;
}
acessaColunas();
colocaValorNasColunas();
atualizaValoresMatriz();
acessaColunasMaq();
colocaValorNasColunasMaq();
console.log(coluna1, coluna2, coluna3);
console.log(colunab1, colunab2, colunab3);

