#! /usr/bin/env node

import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare  user input with computer number and show result
const randomNumber = Math.floor(Math.random()* 10 + 1);

const answers = await inquirer.prompt ([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    }
]);
if (answers.userGuessedNumber === randomNumber)
    {
        console.log("congratulation you guessed the right numnber")
    }
else {
    console.log("you guess wrong number")
}
