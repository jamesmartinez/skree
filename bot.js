"use strict";

const irc = require('irc');

function createHandlers(client, config) {
    /*
     * from, to: strings, bare irc nickames
     * text: string, the text of the message only
     * message: object, the entire raw message object
     */
    client.addListener('message', (from, to, text, message) => {
        console.log('message: ', from, to, text, message.user);
    });

    client.addListener('raw', message => {
        if(config.logAll) {
            console.log(message.args.join(' '));
        }
    });
}

var bot = module.exports = {
    getClient: config => {
        var client = new irc.Client(config.server, config.nick, config);
        createHandlers(client, config);
        return client;
    }
};

