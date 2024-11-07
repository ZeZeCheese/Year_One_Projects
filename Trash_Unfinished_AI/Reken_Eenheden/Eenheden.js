const eenheden = ["mm", "cm", "dm", "m", "dam", "hm", "km"];

let index_left = 0;
let index_right = 0;

let dim_select = document.getElementById("dim_select");

let inp_left = document.getElementById("inp_left");
let eenheid_left = document.getElementById("eenheid_left");

let inp_right = document.getElementById("inp_right");
let eenheid_right = document.getElementById("eenheid_right");

let opgave_float = 3.14;
let right_answer = 3.14;

let aantal_stappen = 0

function makeProblem()
{
    index_left = Math.floor(Math.random() * 7);
    index_right = Math.floor(Math.random() * 7);

    eenheid_left.innerHTML = eenheden[index_left] + "<sup>" + dim_select.value + "</sup>";
    eenheid_right.innerHTML = eenheden[index_right] + "<sup>" + dim_select.value + "</sup>";

    opgave_float = Math.random() * 1000;
    opgave_float = opgave_float.toFixed(3);
    inp_left.value = opgave_float;
}

function checkSolution()
{
    let factor = 10;
    if(dim_select.value > 1){

        factor = Math.pow(10, dim_select.value);

    }
    if(index_left < index_right)
    {
        aantal_stappen = index_right - index_left;
        right_answer = opgave_float / Math.pow(factor,aantal_stappen);
    }
    else
    {
        aantal_stappen = index_left - index_right;
        right_answer = opgave_float * Math.pow(factor,aantal_stappen);
    }
    if(inp_right == right_answer)
    {
        document.getElementById("inp_right").style.background-color;"#FF0000";
    }
    else{
        document.getElementById("inp_right").style.background-color;"#2CC139";
    }
}

