"use strict";

const irc = require('irc');

var config = {
    logAll: true,
    autoConnect: false  // control externally
};

/* Copy in user-specified configuration */
Object.assign(config, require('./config.json'));

var client = module.exports = new irc.Client(
        config.server, config.nick, config);

/*
 * from, to: strings, bare irc nickames
 * text: string, the text of the message only
 * message: object, the entire raw message object
 */
client.addListener('message', (from, to, text, message) => {
  console.log('message: ', from, to, text);
});

client.addListener('raw', message => {
  if(config.logAll) {
    console.log(message.args.join(' '));
  }
});
