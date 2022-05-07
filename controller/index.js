import chalk from 'chalk';

import { CalculatorService } from '../services/index.js';
const calcService  = new CalculatorService();

import { performOperation } from '../util.js';
import { operations } from '../constants.js';

export const handleValues = (input) => {
    
    if(input === 'c'){
        // Reset everything 
        calcService.resetValues();
        console.log(chalk.blue.bold(0));
    } else {
        let previousValue = calcService.getPreviousValue() || 0; // previous value like all calculators 0
        let currentValue = calcService.getCurrentValue() || '';
        let previousOperator = calcService.getPreviousOperator() || '+'; // default as + as the first operation is an addition with the default value

        for (let char of input){
            if(!isNaN(parseInt(char))){
                // concatenant the values together with the previous if the current value is a number
                currentValue = currentValue + char;
                calcService.setCurrentValue(currentValue)
            } else if(operations.includes(char)){
                previousValue = performOperation(currentValue, previousValue, previousOperator);
                previousOperator = char;
                calcService.setPreviousOperator(char);
                calcService.setCurrentValue('');
                currentValue = '';
            } else {
                console.log(chalk.blue.red('Unexpected character: ', char))
            }
        }

        if(previousOperator === '='){
            // Log the result 
            console.log(chalk.blue.bold(previousValue));
            calcService.setPreviousValue(previousValue)
        } else {
            // Log the last number 
            console.log(chalk.blue.bold(currentValue));
            calcService.setPreviousValue(previousValue)
        }
    }
}
