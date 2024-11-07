let cell_A1 = document.getElementById("inp_A1");
let cell_D1 = document.getElementById("inp_D1");
let cell_D2 = document.getElementById("inp_D2");
let cell_D3 = document.getElementById("inp_D3");
let cell_C4 = document.getElementById("inp_C4");
let cell_B4 = document.getElementById("inp_B4");

let cell_B2 = document.getElementById("opl_B2");
let cell_C2 = document.getElementById("opl_C2");
let cell_B3 = document.getElementById("opl_B3");
let cell_C3 = document.getElementById("opl_C3");

function solveProblem()
{
    let gok = 1;
    let decision = true;
    while(decision){

        cell_B2.value = gok;
        cell_C2.value = parseInt(cell_D2.value) - parseInt(cell_B2.value);
        cell_B3.value = parseInt(cell_B4.value) - parseInt(cell_B2.value);
        cell_C3.value = parseInt(cell_C4.value) - parseInt(cell_C2.value);
        if(parseInt(cell_B2.value) + parseInt(cell_C3.value) == parseInt(cell_A1.value) &&
        parseInt(cell_B3.value) + parseInt(cell_C2.value) == parseInt(cell_D1.value) &&
        parseInt(cell_B3.value) + parseInt(cell_C3.value) == parseInt(cell_D3.value) )
            {
                //alert("BINGO");
                decision = false;
            }
            else
            {
                //alert("KAK");
                decision = true;
                gokk++;
            }

    }
    
}
