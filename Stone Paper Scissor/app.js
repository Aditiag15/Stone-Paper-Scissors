let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const drawGame = () => {
    console.log("game was draw");
    msg.innerText = `Match Draw. Play again`;
    msg.style.backgroundColor = "#cddb32ff";
}

const showWinner = (userWin, userScore, compScore, userChoice, compChoice) => {
    if (userWin) {
        console.log("You won");
        msg.innerText = `You won. Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "#50cd58ff";
        userScorePara.innerText = userScore;
    }
    else {
        console.log("Computer won")
        msg.innerText = `Computer won. ${compChoice} beats your  ${userChoice}`
        msg.style.backgroundColor = "#e04a4aff";
        compScorePara.innerText = compScore;
    }
}

const gentCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const playGame = (userChoice) => {
    let compChoice = gentCompChoice();
    console.log(userChoice, compChoice);
    let userWin = false;
    if (userChoice == compChoice) {
        drawGame();
    }
    else {
        if ((userChoice == "rock" && compChoice == "scissors") || (userChoice == "paper" && compChoice == "rock") || (userChoice == "scissors" && compChoice == "paper")) {
            userScore = userScore + 1;
            userWin = true;
        }
        else {
            compScore = compScore + 1;
            userWin = false;
        }
        showWinner(userWin, userScore, compScore, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

