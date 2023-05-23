
let blackJack = false
let alive =false
let outMsg="logging out!"
let cards=[]
let sum = 0

let player ={
    playerName:"yudhir",
    chips:125
}

let playerEl = document.getElementById("player-el")
let msgEl = document.getElementById("msg-el")
let sumEl =document.querySelector("#sum-el")
let cardsEl =document.getElementById("cards-el")

playerEl.textContent = player.playerName + " has " + player.chips +" chips"

function startGame()
{   alive = true
    let firstCard =randomCard()
    let secondCard = randomCard()
    sum = firstCard+secondCard
    
    renderGame()
}

function renderGame()
{   
    cardsEl.textContent="Cards: "
    for(i=0; i<cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent="Sum:" + sum
    if (sum <= 20)
    {
        outMsg ="Draw a new Card?"
    }
    else if(sum === 21)
    {
        outMsg ="Great, BlackJack!"
        blackJack= true
    }
    else
    {   
        outMsg = "Sorry, you are out."
        alive =false
    }
    
msgEl.textContent=outMsg
}

function newCard()
{
    
   
    if(alive === true && blackJack === false)
    {
        let card =randomCard()
        sum = card+sum
        cards.push(card)
        renderGame()
    }
    console.log(sum)
}

function randomCard()
{
    let num = Math.floor(Math.random()*13) + 1 // to make range from 0-12 to 1-13
    if (num === 1)
    {
        return 11
    }
    else if(num > 10)
    {
        return 10
    }
    return num
}