let computer = 0;
let user = 0;
const userScore = document.querySelector(".user");
const computerScore = document.querySelector(".computer");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
let yourChoice = document.querySelector(".yourChoice");
let computerChoice = document.querySelector(".computerChoice");


function check(choice) {
    let choices = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * 3);
    let fromComputer = choices[random];
    if (choice == "rock") {
        switch (fromComputer) {
            case "paper":
                result.textContent = "Computer wins";
                computer++;
                computerChoice.textContent = "Computer's choice: paper";
                break;
            case "scissor":
                result.textContent = "You win";
                user++;
                computerChoice.textContent = "Computer's choice: scissor";
                break;
            default:
                result.textContent = "Draw";
                computerChoice.textContent = "Computer's choice: rock";
                break;        

        }
      
    } else if (choice == "paper") {
        switch (fromComputer) {
            case "scissor":
                result.textContent = "Computer wins";
                computer++;
                computerChoice.textContent = "Computer's choice: scissor";
                break;
            case "rock":
                result.textContent = "You win";
                user++;
                computerChoice.textContent = "Computer's choice: rock";
                break;
            default:
                result.textContent = "Draw";
                computerChoice.textContent = "Computer's choice: paper";
                break;

        }
    } else {
        switch (fromComputer) {
            case "rock":
                result.textContent = "Computer wins";
                computer++;
                computerChoice.textContent = "Computer's choice: rock";
                break;
            case "paper":
                result.textContent = "You win";
                user++;
                computerChoice.textContent = "Computer's choice: paper";
                break;
            default:
                result.textContent = "Draw";
                computerChoice.textContent = "Computer's choice: scissor";
                break;

        }
    }
    yourChoice.textContent = `Your choice: ${choice}`;  
    result.style.display = "block";
    yourChoice.style.display = "block";
    computerChoice.style.display = "block";
    userScore.textContent = user;
    computerScore.textContent = computer;

    reset.addEventListener("click", function (e) {
        computerScore.textContent = 0;
        userScore.textContent = 0;
        user = 0;
        computer = 0;
        result.style.display = "none";
        yourChoice.style.display = "none";
        computerChoice.style.display = "none";
    });
}