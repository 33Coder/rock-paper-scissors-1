/*jshint esversion: 6 */
let player_score = 0;
let comp_score = 0;
let game_number = 1;

let computer_play = () => {
	let randomizer = Math.floor(Math.random()*3);
	let choice = {
		0 : "rock", 
		1 : "paper", 
		2 : "scissors"
	};
	
	let comp_choice = choice[randomizer];
	console.log("comp",comp_choice);
	return comp_choice;
};


let play_round = (player_choice) => {
	player_choice = player_choice.toLowerCase();
	console.log("player", player_choice);

	if (player_choice == "rock" || player_choice == "paper" || player_choice == "scissors") {
		check_winner(player_choice);
	}
	else {
		console.log("Please enter, rock, paper, or scissors");
	}
	console.log("1 player_score=", player_score, "comp_score=", comp_score);

};

let check_winner = (player_choice) => {

	let comp_test = computer_play();
		//let comp_test = "scissors"; // for testing only

		if (comp_test == player_choice) {
			console.log("TIE");
			return;
		}

		switch (comp_test) {

			case "rock":
			if (player_choice == "paper") {
				player_score++;
				console.log("You win, paper beats rock!");
			}
			else {
				comp_score++;
				console.log("You lose, rock beats scissors");
			}
			break;

			case "paper":
			if (player_choice == "scissors") {
				player_score++;
				console.log("You win, scissors beats paper");	
			}
			else {
				comp_score++;
				console.log("You lose, paper beats rock");	
			}
			break;

			case "scissors":
			if (player_choice == "rock") {
				player_score++;
				console.log("You win, rock beats scissors");
			}
			else {
				comp_score++;
				console.log("You lose, scissors beats paper");
			}
			return player_score, comp_score;
		}
	};

	let game = () => {
		while (game_number < 6) {	
			let player_choice = window.prompt("Enter rock, paper, or scissors");
			play_round(player_choice);
			console.log("player_score=", player_score, "comp_score=", comp_score, "game_number=", game_number);
			game_number++;
		}
		who_wins();
	};

	let who_wins = () => {
		let win_statement;

		if (player_score > comp_score) {
			win_statement = "you win!";
		} else if (player_score < comp_score) {
			win_statement = "computer wins.";
		} else {
			win_statement = "it's a tie!";
		}
		console.log(`You scored ${player_score}, the computer scored ${comp_score}, ${win_statement}`);
	};

	game();

