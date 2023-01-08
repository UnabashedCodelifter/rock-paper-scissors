function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0)
        return "rock";
    else if (choice == 1)
        return "paper"
    else
        return "scissors";
}

function getUserChoice()
{
    return prompt("Choose rock paper or scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == 'paper')
    {
        if (computerSelection == 'rock')
        {
            console.log("You win! Paper beats rock");
            return 1;
        }
        else if (computerSelection == 'scissors')
        {
            console.log("You lose! Scissors beat paper");
            return -1;
        }
        else
        {
            console.log("Tie");
            return 0;
        }
    }
    else if (playerSelection == 'scissors')
    {
        if (computerSelection == 'rock')
        {
            console.log("You lose! Rock beat scissors");
            return -1;
        }
        else if (computerSelection == 'scissors')
        {
            console.log("Tie");
            return 0;
        }
        else
        {
            console.log("You win! Scissors beat paper");
            return 1;
        }
    }
    else
    {
        if (computerSelection == 'rock')
        {
            console.log("Tie");
            return 0;
        }
        else if (computerSelection == 'scissors')
        {
            console.log("You win! Rock beat scissors");
            return 1;
        }
        else
        {
            console.log("You lose! Paper beat rock");
            return -1;
        }
    }
}

function game()
{
    let playerScore = 0, computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        let result = playRound(getUserChoice(), getComputerChoice());
        
        if(result == 1)
        {
            playerScore += 1;
        }
        else if (result == -1)
        {
            computerScore += 1;
        }
    }

    if (playerScore > computerScore)
    {
        console.log("Congratulations, you won!");
    }
    else if (playerScore < computerScore)
    {
        console.log("You lost!");
    }
    else
    {
        console.log("It's a tie!");
    }
}