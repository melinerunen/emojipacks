/**
 * Module dependencies.
 */
var prompt = require('co-prompt');
var chalk = require('chalk');

/**
 * Prompt with validation.
 * @param  {string} message
 * @param  {Object} valid - Fucntion to validate if is valid or not
 * @param  {string} error
 */
function *ask(message, valid, error) {
  var res;
  do {
    if (message.toLowerCase().indexOf('password') >= 0) res = yield prompt.password(message);
    else res = yield prompt(message);
    if (!valid(res)) err(error);
  } while (!(valid(res)));
  return res;
}

exports.prompt_ask = ask;

/**
 * 
 */
/**
 * Show error message.
 * @param  {string} message
 */
function err(message) {
  console.log(chalk.red(message));
}
