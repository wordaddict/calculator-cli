#! /usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';

import { handleValues } from './controller/index.js';


const getCommand = process.argv[2];
if(!getCommand){
    // default number in the calculator
    console.log(chalk.blue.bold(0));
} else {
    handleValues(getCommand);
}

program
  .name('calculator')
  .description('CLI to perform basic mathematical functions')
  .version('0.1.0');

program.parse();
