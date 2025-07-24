const chalk = require('chalk').default;
const dayjs = require('dayjs');
const { v4: uuidv4 } = require('uuid');


const timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss');
const logId = uuidv4();
const message = 'User logged in successfully.';

console.log(chalk.bold.blue('Log Entry'));
console.log(chalk.green(`Timestamp: ${timestamp}`));
console.log(chalk.yellow(`Log ID: ${logId}`));
console.log(chalk.cyan(`Message: ${message}`));
