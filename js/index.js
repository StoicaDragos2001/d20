function decideWinner(firstDice, secondDice) {
    if (firstDice === secondDice)
        return ("Draw!");
    if (firstDice > secondDice)
        return ("🚩 Player Wins!")
    return ("Enemy Wins! 🚩")
}

var randomNumber1 = Math.floor(Math.random() * 20 + 1);
var randomNumber2 = Math.floor(Math.random() * 20 + 1);
var firstDicePath = "images/d20-" + randomNumber1.toString() + ".png";
var secondDicePath = "images/d20-" + randomNumber2.toString() + ".png";

document.querySelectorAll("img")[0].setAttribute("src", firstDicePath);
document.querySelectorAll("img")[1].setAttribute("src", secondDicePath);

var conclusionMessage = decideWinner(randomNumber1, randomNumber2);
document.querySelector(".container h1").innerText = conclusionMessage;