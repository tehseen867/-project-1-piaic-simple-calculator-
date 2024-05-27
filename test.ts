#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright('_____________________WELLCOME__________________'))

async function calculate() {
    
    let num1=await inquirer.prompt([{
        name:'FirstNumber',
        type:'number',
        message:chalk.greenBright('please enter first number')
    }])

    let num2=await inquirer.prompt([{
        name:'SecondNumber',
        type:'number',
        message:chalk.greenBright('please enter second number')
    }])

if (isNaN(num1.FirstNumber) || isNaN(num2.SecondNumber)){
    console.log(chalk.red('Please Enter In Digit'))
    return calculate();
}

let Question =await inquirer.prompt([
 { name:'oprator',
    type:'list',
    message:chalk.cyanBright('Select a method to perform an action '),
    choices:['Addition','Subtraction','Multiplication','Division','Modulus','Exponentiation']}
])

 if(Question.oprator==='Addition'){
    console.log(chalk.green(num1.FirstNumber + num2.SecondNumber))
}

else if(Question.oprator==='Subtraction'){
    console.log(chalk.green(num1.FirstNumber - num2.SecondNumber))
}

else if(Question.oprator==='Multiplication'){
    console.log(chalk.green(num1.FirstNumber * num2.SecondNumber))
}

else if(Question.oprator==='Division'){
    console.log(chalk.green(num1.FirstNumber / num2.SecondNumber))
}

else if(Question.oprator==='Modulus'){
    console.log(chalk.green(num1.FirstNumber % num2.SecondNumber))
}
else{
    console.log(chalk.green(num1.FirstNumber ** num2.SecondNumber))
}

}
calculate();