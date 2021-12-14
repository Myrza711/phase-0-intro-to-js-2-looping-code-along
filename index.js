/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow}!`)
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);
*/




const names = ("Guadalupe", "Ollie", "Aki")
function writeCards(names, surprise) {
   let messages = []
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    
   
  }
  return messages
}
debugger

function countDown() {
let countDown = 10
while (countDown >= 0) {
    console.log(countDown)
    countDown--
}
}
debugger