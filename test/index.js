var input1 = document.getElementById("calcInput1")
var input2 = document.getElementById("calcInput2")
var output = document.getElementById("outputValue")

function plus(){
    let a = Number(input1.value)
    let b = Number(input2.value)
    output.textContent = a + b

}
function minus(){
    let a = Number(input1.value)
    let b = Number(input2.value)
    output.textContent = a - b
}
function pjestim(){
    let a = Number(input1.value)
    let b = Number(input2.value)
    if(b ==0){
        output.textContent = "Nuk mund te pjestosh me zero"
    }else{
        output.textContent = a / b
    }
}
function shumzim(){
    let a = Number(input1.value)
    let b = Number(input2.value)
    output.textContent = a * b  
}


