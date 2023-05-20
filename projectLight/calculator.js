let firstEl =document.getElementById("firstNo")
let secondEl =document.getElementById("secondNo")
let resultEl =document.getElementById("resultNo")

let first = prompt("First element")
let second =prompt("Second element ")



firstEl.innerText = first
secondEl.innerText =second

parseInt(first)
parseInt(second)
 

function add()
{   
    let result= first +second
    resultEl.textContent = result
    console.log(result)
}

function sub()
{
    resultEl.textContent = first - second
    console.log(first-second)
}
function multi()
{
    resultEl.textContent = first*second
    console.log(first*second)
}
function div()
{
    let result = first/second
    resultEl.textContent= result
    console.log(result)
}

