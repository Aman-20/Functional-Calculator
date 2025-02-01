let display = document.querySelector("#text");


function toDisplay(input){
    display.value += input;
}

function cleardata(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}