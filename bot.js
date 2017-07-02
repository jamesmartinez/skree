"use strict";

const irc = require('irc');

function createHandlers(client, config, skree) {
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

    /*
     * config is an object to be passed to the irc library
     * skree is a namespace to share dependencies
     */
    getClient: (config, skree) => {
        var client = new irc.Client(config.server, config.nick, config);
        createHandlers(client, config, skree);
        return client;
    }
};

