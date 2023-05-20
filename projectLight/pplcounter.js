let count= 0;
let theTotal= 0;
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl =document.getElementById("total-el")
console.log(countEl)
function increment()
{
    console.log("clicked")
    
    count =count+1;
    theTotal = count
    countEl.innerText =count
    console.log(count)
    
}

function save(){
    let countStr = count +" - "
    saveEl.textContent += countStr
console.log(count)
countEl.textContent =0;
count =0

}
function total()
{
 totalEl.textContent = theTotal
 console.log("total = "+ theTotal)
}

