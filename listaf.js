
let a1=0,a2=0,a3=0,a4=0,a5=0,a6=0,a7=0,a8=0,a9=0;
let linha1 = [a1, a4, a7];
let linha2 = [a2, a5, a8];
let linha3 = [a3, a6, a9];
let coluna1 = [];
let coluna2 = [];
let coluna3 = [];
let dadosPlayer = [linha1, linha2, linha3];

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
    coluna1 = [1,3,3];
    coluna2 = [4,5,6];
    coluna3 = [7,8,9];
}

//valores dos combos (se houver)
function verificaCombosC1()
{
    let valorCombo = 0;

    if(coluna1[0] == coluna1[1])
    {
        valorCombo = ((coluna1[0]*coluna1[1])*2)+coluna1[2];
    }

    else if ( coluna1[0] == coluna1[2]) 
    {
        valorCombo = ((coluna1[0]*coluna1[2])*2)+coluna1[1];
    }
    
    else if ( coluna1[1] == coluna1[2]) 
    {
        valorCombo = ((coluna1[1]*coluna1[2])*2)+coluna1[0];
    }

    else if (coluna1[0] == coluna1[1] && coluna1[0] == coluna1[2])
    {
        valorCombo = (coluna1[0]*coluna1[1]*coluna1[2])*3;
    }

    else
    {
        valorCombo = coluna1[0] + coluna1[1] + coluna1[2]
    }
    return valorCombo;
}

console.log(verificaCombosC1);

