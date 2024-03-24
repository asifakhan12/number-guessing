#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const numguessed = Math.floor((Math.random()) * 10);
let numb = await inquirer.prompt([{
        type: 'number',
        name: 'guessing',
        message: 'guess a number in between (1 to 10) :'
    }]);
if (numb.guessing === numguessed) {
    console.log(chalk.bgCyan(`congratulation! you r smart & you guessed a right number which is ${numguessed}`));
}
else {
    console.log(chalk.bgRed(`you giving a wrong number`));
}
