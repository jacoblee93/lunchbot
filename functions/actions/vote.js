const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const message = require('../../utils/message.js');

/**
* example.js
*
*   Basic example action handler. Called in response to an input from an
*     interactive message action with name set to "example".
*   All Actions in response to interactive messages use this template, simply
*     create additional files with different names to add actions.
*
*   See https://api.slack.com/docs/message-buttons for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {object} action The full Slack action object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, action = {}, botToken = null, callback) => {

  let buttonAction = action.actions[0];

  message(
    botToken,
    channel,
    {
      text: `${action.user.name} voted for ${action.actions[0].value}!`
    },
    (err, result) => {
      return callback(null, action.original_message);
    }
  );

};
