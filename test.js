import assert from 'assert';
import chalk from 'chalk';

import { performOperation } from './util.js';

assert.deepEqual( performOperation(12, 14, '+'), 26, 'Values are added')

assert.deepEqual( performOperation(12, 14, '-'), 2, 'Values are subtracted')

assert.deepEqual( performOperation(12, 14, '*'), 168, 'Values are multiplied')

assert.deepEqual( performOperation(10, 20, '/'), 2, 'Values are divided')

console.log(chalk.greenBright.bold('TEST RAN SUCCESSFULLY'));