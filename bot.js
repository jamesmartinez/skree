"use strict";

const irc = require('irc');

/*
 * from, to: strings, bare irc nickames
 * text: string, the text of the message only
 * message: object, the entire raw message object
 */
function messageHandler(from, to, text, message) {
  console.log('message: ', from, to, text);
}

function rawHandler(message) {
  if(config.logAll) {
    console.log(message.args.join(' '));
  }
}

var bot = module.exports = {
    getClient: config => {
        var client = new irc.Client(config.server, config.nick, config);
        client.addListener('message', messageHandler);
        client.addListener('raw', rawHandler);
        return client;
    }
};

