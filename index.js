/*jshint esversion: 6 */
let playerScore = 0;
let compScore = 0;
let game_number = 1;

let computer_play = () => {
	let randomizer = Math.floor(Math.random()*3);
	let choice = {
		0 : "rock", 
		1 : "paper", 
		2 : "scissors"
	};
	//console.log(choice[randomizer]);
	let compChoice = choice[randomizer];
	console.log("comp",compChoice);
	return compChoice;
};


let play_round = (playerChoice) => {
  playerChoice = playerChoice.toLowerCase();
  console.log("player", playerChoice);
  if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
  	check_winner(playerChoice);
  }
  else {
  	console.log("Please enter, rock, paper, or scissors as parameter in play_round()");
  }
    console.log("1 playerScore=", playerScore, "compScore=", compScore);

};

let check_winner = (playerChoice) => {
  
	let comp_test = computer_play();
		//let comp_test = "scissors"; // for testing only

	if (comp_test == playerChoice) {
		console.log("TIE");
		return;
	}

	switch (comp_test) {

		case "rock":
		if (playerChoice == "paper") {
			playerScore++;
		  console.log("You win, paper beats rock!");
		  }
		else {
    	compScore++;
      console.log("You lose, rock beats scissors");
		  }
		break;

		case "paper":
		if (playerChoice == "scissors") {
			playerScore++;
			console.log("You win, scissors beats paper");	
		}
		else {
			compScore++;
			console.log("You lose, paper beats rock");	
		}
		break;

		case "scissors":
		if (playerChoice == "rock") {
			playerScore++;
			console.log("You win, rock beats scissors");
		}
		else {
			compScore++;
			console.log("You lose, scissors beats paper");
		}
		return playerScore, compScore;
	}
};

let game = () => {
	while (game_number < 6) {	
		let playerChoice = window.prompt("Enter rock, paper, or scissors");
		play_round(playerChoice);
		console.log("playerScore=", playerScore, "compScore=", compScore, "game_number=", game_number);
	  game_number++;
	}
	who_wins();
};

let who_wins = () => {
console.log("BOOM");
let win_statement;
  if (playerScore > compScore) {
  	win_statement = "you win!";
  } else if (playerScore < compScore) {
  	win_statement = "computer wins.";
  } else {
  	win_statement = "it's a tie!";
  }
  console.log(`You scored ${playerScore}, the computer scored ${compScore}, ${win_statement}`);
};

game();

