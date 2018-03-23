const lib = require('lib')({token: process.env.STDLIB_TOKEN});
/**
* /hello
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {

  let options = text.split(' ');
  let actions = options.map((option) => {
    return {
      name: 'vote',
      text: option,
      type: 'button',
      value: option
    };
  });

  callback(null, {
    text: `What do you all want for lunch today?`,
    attachments: [{
      text: 'Choose a restaurant:',
      fallback: 'Can\'t display attachment',
      callback_id: 'callback_id',
      actions: actions
    }]
  });
};
